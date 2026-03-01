"use client"

import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
            <Car className="h-3 w-3 text-primary" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">
            AutoVal<span className="text-primary">AI</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Built with Machine Learning. For demonstration purposes only.
        </p>
      </div>
    </footer>
  )
}
