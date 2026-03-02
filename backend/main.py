from fastapi import FastAPI
import joblib
import numpy as np

app = FastAPI()

# Load trained model
model = joblib.load("model.pkl")

@app.get("/")
def home():
    return {"message": "Car Price Prediction API is running 🚗"}

@app.post("/predict")
def predict(data: dict):
    """
    Expected JSON:
    {
        "features": [feature1, feature2, feature3, ...]
    }
    """

    features = np.array(data["features"]).reshape(1, -1)
    prediction = model.predict(features)

    return {
        "predicted_price": float(prediction[0])
    }