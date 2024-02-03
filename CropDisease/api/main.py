from fastapi import FastAPI, UploadFile, File, BackgroundTasks
import uvicorn
from io import BytesIO
from PIL import Image
import numpy as np
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("../saved_model/1")
CLASS_NAMES = ['Pepper__bell___Bacterial_spot',
               'Pepper__bell___healthy',
               'Potato___Early_blight',
               'Potato___Late_blight',
               'Potato___healthy',
               'Tomato_Bacterial_spot',
               'Tomato_Early_blight',
               'Tomato_Late_blight',
               'Tomato_Leaf_Mold',
               'Tomato_Septoria_leaf_spot',
               'Tomato_Spider_mites_Two_spotted_spider_mite',
               'Tomato__Target_Spot',
               'Tomato__Tomato_YellowLeaf__Curl_Virus',
               'Tomato__Tomato_mosaic_virus',
               'Tomato_healthy']


def read_file_as_image(data, target_size=(128, 128)) -> np.ndarray:
    image = Image.open(BytesIO(data))
    image = image.resize(target_size)
    image = np.array(image)
    return image


def generate_prediction_response(file: UploadFile, background_tasks: BackgroundTasks):
    image = read_file_as_image(file.file.read())
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(img_batch)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])

    response = {
        "class": predicted_class,
        "confidence": float(confidence)
    }

    # Implement the logic to send the response to the client
    # This could be through a WebSocket, database, or any other means
    print(response)

    # Do background tasks here
    background_tasks.add_task(send_response_background, response)

    # You can return some acknowledgment or other response
    # return {"message": "Prediction task added to the background queue."}
    return response


def send_response_background(response):
    # Implement the logic to send the response to the client in the background
    print("Sending response in the background:", response)


@app.post("/predict")
async def predict(file: UploadFile = File(...), background_tasks: BackgroundTasks = BackgroundTasks()):
    response = generate_prediction_response(file, background_tasks)
    return response


@app.get("/ping")
async def ping():
    return "Hello, I am alive"


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=4444)
