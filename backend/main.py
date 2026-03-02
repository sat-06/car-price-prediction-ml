from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import joblib
import pandas as pd


from fastapi import FastAPI
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for now
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Proper absolute path loading
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "car_price_model_pkl")

data = joblib.load(model_path)
model = data["model"]
columns = data["columns"]

# ✅ Fix CORS (corrected localhost format)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Car Price Prediction API is running 🚗"}


@app.post("/predict")
def predict(input_data: dict):
    """
    Expected JSON format:

    {
        "Year": 2018,
        "Present_Price": 5.5,
        "Km": 35000,
        "Owner": 0,
        "Car_Name": "swift",
        "Fuel_Type": "Petrol",
        "Selling_type": "Individual",
        "Transmission": "Manual"
    }
    """

    # 🔹 Convert input to DataFrame
    df = pd.DataFrame([input_data])

    # 🔹 Apply same preprocessing as training
    df = pd.get_dummies(df)

    # 🔹 Ensure same column order as training
    df = df.reindex(columns=columns, fill_value=0)

    # 🔹 Predict
    prediction = model.predict(df)

    return {
        "predicted_price": float(prediction[0])
    }