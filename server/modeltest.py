
from transformers import pipeline
# Load the AI image detection model from Huggingface


def load_model():
    model = pipeline('image-classification',
                     model="umm-maybe/AI-image-detector")
    return model
# Use the model to check if the image is AI-generated


def check_if_ai_image(image_path):
    model = load_model()
    predictions = model(image_path)

    # Assuming the model returns a list of predictions, where one of them is 'AI-Generated' or similar
    for prediction in predictions:
        # or 'artificial' based on the model
        if prediction['label'].lower() == 'ai-generated':
            return True
    return False


# print(check_if_ai_image('/home/saxyamdh/Desktop/Projects/NASIT/server/test2.jpeg'))