"use client"

import { motion } from "framer-motion"
import { Car } from "lucide-react"

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Car className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-bold tracking-tight text-foreground">
            AutoVal<span className="text-primary">AI</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 sm:flex">
          <a href="#predict" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            Predict
          </a>
          <a href="#analytics" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            Analytics
          </a>
          <a href="#" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            API
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
            Sign In
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
