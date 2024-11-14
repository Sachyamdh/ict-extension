from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from allowedFiles import allowed_file
from image_handler import download_image, delete_image
from modeltest import check_if_ai_image

app = Flask(__name__)
CORS(app, resources={r"/upload-image": {"origins": "https://www.google.com"}})

# Route for uploading images via URL
@app.route('/upload-image', methods=['POST'])
def upload_image_from_url():
    data = request.json

    image_url = data.get('image_url')
    if not image_url:
        return jsonify({'error': 'No image URL provided'}), 400

    try:
        image_path = download_image(image_url)
        is_ai_image = check_if_ai_image(image_path)
        delete_image(image_path)
        return jsonify({'is_ai_image': is_ai_image})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route for uploading image files directly
@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['image']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save('downloaded.jpg')
        is_ai_image = check_if_ai_image('downloaded.jpg')
        print(is_ai_image)
        delete_image('downloaded.jpg')
        return jsonify({'is_ai_image': is_ai_image})
    else:
        return jsonify({"error": "Invalid file type"}), 400

if __name__ == '__main__':
    app.run(debug=True)
