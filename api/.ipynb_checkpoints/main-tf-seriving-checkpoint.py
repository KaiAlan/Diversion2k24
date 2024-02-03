from fastapi import FastAPI, UploadFile, File
import uvicorn
from io import BytesIO
from PIL import Image
import numpy as np
import tensorflow as tf
import requests

app = FastAPI()

endpoint = "http://localhost:4000/v1/models/potatoes_model/predict"


CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]


@app.get("/ping")
async def ping():
    return "Hello, I am alive"


def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image


@app.post("/predict")
async def predict(
        file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    json_data = {
        "instances": img_batch.tolist()
    }
    response = requests.port(endpoint, json=json_data)
    pass




if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=4400)
