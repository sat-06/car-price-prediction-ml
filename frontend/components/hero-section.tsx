"use client"

import { motion } from "framer-motion"
import { Gauge, Zap, Brain } from "lucide-react"

export function HeroSection({ onPredictClick }: { onPredictClick: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      {/* Radial glow behind heading */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            AI-Powered Valuation Engine
          </span>
        </motion.div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          <span className="text-primary">AI</span> Car Price{" "}
          <span className="text-primary">Predictor</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          Smart Vehicle Valuation Powered by Machine Learning.
          Get accurate price predictions in seconds.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
          whileTap={{ scale: 0.97 }}
          onClick={onPredictClick}
          className="group relative mt-4 flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all"
        >
          <Gauge className="h-4 w-4" />
          Predict Now
          <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl transition-opacity group-hover:opacity-100 opacity-0" />
        </motion.button>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {[
          { icon: Brain, label: "ML Models Trained", value: "50K+" },
          { icon: Zap, label: "Predictions Made", value: "2M+" },
          { icon: Gauge, label: "Accuracy Rate", value: "96.5%" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card/40 px-6 py-4 backdrop-blur-md"
          >
            <stat.icon className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
