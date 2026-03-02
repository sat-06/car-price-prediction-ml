"use client"

import { useState } from "react"

export default function Home() {
  const [year, setYear] = useState("")
  const [presentPrice, setPresentPrice] = useState("")
  const [kmsDriven, setKmsDriven] = useState("")
  const [fuelType, setFuelType] = useState("Petrol")
  const [sellerType, setSellerType] = useState("Dealer")
  const [transmission, setTransmission] = useState("Manual")
  const [prediction, setPrediction] = useState<number | null>(null)

  const handlePredict = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year: Number(year),
          present_price: Number(presentPrice),
          kms_driven: Number(kmsDriven),
          fuel_type: fuelType,
          seller_type: sellerType,
          transmission: transmission,
        }),
      })

      const data = await response.json()
      setPrediction(data.predicted_price)
    } catch (error) {
      alert("Error connecting to backend")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🚗 Car Price Prediction
        </h1>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="number"
            placeholder="Present Price (in lakhs)"
            value={presentPrice}
            onChange={(e) => setPresentPrice(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="number"
            placeholder="Kms Driven"
            value={kmsDriven}
            onChange={(e) => setKmsDriven(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />

          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
          </select>

          <select
            value={sellerType}
            onChange={(e) => setSellerType(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            <option>Dealer</option>
            <option>Individual</option>
          </select>

          <select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            <option>Manual</option>
            <option>Automatic</option>
          </select>

          <button
            onClick={handlePredict}
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Predict Price
          </button>

          {prediction !== null && (
            <div className="mt-6 text-center text-xl font-semibold text-green-600">
              Predicted Price: ₹ {prediction} Lakhs
            </div>
          )}

        </div>
      </div>
    </div>
  )
}