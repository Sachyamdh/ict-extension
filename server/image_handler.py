import requests
import os
import base64

def download_image(image_url):
    if image_url.startswith('data:image'):
        return save_base64_image(image_url)
    
    response = requests.get(image_url)
    if response.status_code == 200:
        image_path = 'downloaded.jpg'  
        with open(image_path, 'wb') as file:
            file.write(response.content)
        return image_path
    else:
        raise Exception('Failed to download image')

def save_base64_image(base64_string):
    header, encoded = base64_string.split(',', 1)
    if 'jpeg' in header:
        ext = 'jpg'
    elif 'png' in header:
        ext = 'png'
    else:
        raise Exception('Unsupported image format')

    image_data = base64.b64decode(encoded)
    image_path = f'downloaded.{ext}'
    
    with open(image_path, 'wb') as file:
        file.write(image_data)
    
    return image_path

def delete_image(image_path):
    if os.path.exists(image_path):
        os.remove(image_path)


