"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, ShieldCheck, BarChart3, Sparkles } from "lucide-react"

interface PredictionResultProps {
  predictedPrice: number | null
  confidence: number
  isVisible: boolean
}

function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (value === 0) return
    let start = 0
    const increment = value / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [value, duration])

  return <span>{count.toFixed(2)}</span>
}

export function PredictionResult({
  predictedPrice,
  confidence,
  isVisible,
}: PredictionResultProps) {
  return (
    <AnimatePresence>
      {isVisible && predictedPrice !== null && (
        <section className="relative z-10 px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-2xl"
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Prediction <span className="text-primary">Result</span>
              </h2>
            </div>

            {/* Main result card */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/40 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(6,182,212,0.12)]">
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(6,182,212,0.4) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20"
                >
                  <Sparkles className="h-8 w-8 text-primary" />
                </motion.div>

                <div className="text-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Estimated Selling Price
                  </p>
                  <p className="mt-2 text-5xl font-bold text-foreground sm:text-6xl">
                    <span className="text-primary">
                      <AnimatedCounter value={predictedPrice} />
                    </span>{" "}
                    <span className="text-2xl text-muted-foreground">Lakhs</span>
                  </p>
                </div>

                {/* Confidence & details */}
                <div className="mt-4 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Confidence</p>
                      <p className="text-sm font-semibold text-foreground">
                        {confidence}%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Market Trend</p>
                      <p className="text-sm font-semibold text-foreground">Stable</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Data Points</p>
                      <p className="text-sm font-semibold text-foreground">12,847</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  )
}
