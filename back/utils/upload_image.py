import cloudinary
import cloudinary.uploader 
import os
from dotenv import load_dotenv


load_dotenv()
# Configuración de Cloudinary
cloudinary.config( 
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"), 
    api_key=os.getenv("CLOUDINARY_API_KEY"), 
    api_secret=os.getenv("CLOUDINARY_API_SECRET"), 
    secure=True
)

def upload_file(file):
    try:
        upload_result = cloudinary.uploader.upload(file, folder="uploads")
        return upload_result["secure_url"]
    except Exception as e:
        raise e
