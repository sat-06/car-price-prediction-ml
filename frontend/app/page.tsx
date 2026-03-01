"use client"

import { useRef, useState } from "react"
import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PredictionForm, type FormData } from "@/components/prediction-form"
import { PredictionResult } from "@/components/prediction-result"
import { AnalyticsSection } from "@/components/analytics-section"
import { Footer } from "@/components/footer"

function simulatePrediction(data: FormData): {
  price: number
  confidence: number
} {
  const year = parseFloat(data.yearOfPurchase) || 2018
  const presentPrice = parseFloat(data.presentPrice) || 5
  const kmsDriven = parseFloat(data.kmsDriven) || 30000
  const owners = parseInt(data.owners) || 0

  const ageFactor = Math.max(0.1, 1 - (2026 - year) * 0.08)
  const kmFactor = Math.max(0.3, 1 - kmsDriven / 300000)
  const fuelFactor = data.fuelType === "Diesel" ? 1.05 : data.fuelType === "CNG" ? 0.9 : 1
  const transmissionFactor = data.transmission === "Automatic" ? 1.1 : 1
  const ownerFactor = Math.max(0.6, 1 - owners * 0.12)
  const sellerFactor = data.sellerType === "Dealer" ? 1.02 : 0.98

  const price =
    presentPrice *
    ageFactor *
    kmFactor *
    fuelFactor *
    transmissionFactor *
    ownerFactor *
    sellerFactor

  const confidence = Math.min(97, Math.max(82, 96 - Math.abs(price - 3) * 0.5))

  return { price: Math.max(0.1, parseFloat(price.toFixed(2))), confidence: Math.round(confidence) }
}

export default function Home() {
  const formRef = useRef<HTMLElement>(null)
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null)
  const [confidence, setConfidence] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePredict = (data: FormData) => {
    const result = simulatePrediction(data)
    setPredictedPrice(result.price)
    setConfidence(result.confidence)
    setShowResult(true)

    // Scroll to result after short delay
    setTimeout(() => {
      document
        .getElementById("result-section")
        ?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <ParticlesBackground />
      <Navbar />
      <HeroSection onPredictClick={scrollToForm} />
      <PredictionForm ref={formRef} onPredict={handlePredict} />
      <div id="result-section">
        <PredictionResult
          predictedPrice={predictedPrice}
          confidence={confidence}
          isVisible={showResult}
        />
      </div>
      <div id="analytics">
        <AnalyticsSection />
      </div>
      <Footer />
    </main>
  )
}
