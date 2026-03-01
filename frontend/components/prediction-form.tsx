"use client"

import { useState, forwardRef } from "react"
import { motion } from "framer-motion"
import { Car, Fuel, Users, Settings, Calendar, DollarSign, Gauge as GaugeIcon } from "lucide-react"

interface PredictionFormProps {
  onPredict: (data: FormData) => void
}

export interface FormData {
  yearOfPurchase: string
  presentPrice: string
  kmsDriven: string
  fuelType: string
  sellerType: string
  transmission: string
  owners: string
}

const InputField = ({
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string
  icon: React.ElementType
  type?: string
  value: string
  onChange: (val: string) => void
  placeholder: string
}) => (
  <div className="group relative flex flex-col gap-2">
    <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-primary" />
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
    />
  </div>
)

const SelectField = ({
  label,
  icon: Icon,
  value,
  onChange,
  options,
}: {
  label: string
  icon: React.ElementType
  value: string
  onChange: (val: string) => void
  options: { value: string; label: string }[]
}) => (
  <div className="group relative flex flex-col gap-2">
    <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-primary" />
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] appearance-none cursor-pointer"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
)

export const PredictionForm = forwardRef<HTMLElement, PredictionFormProps>(
  function PredictionForm({ onPredict }, ref) {
    const [formData, setFormData] = useState<FormData>({
      yearOfPurchase: "",
      presentPrice: "",
      kmsDriven: "",
      fuelType: "Petrol",
      sellerType: "Dealer",
      transmission: "Manual",
      owners: "0",
    })

    const update = (key: keyof FormData) => (val: string) =>
      setFormData((prev) => ({ ...prev, [key]: val }))

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onPredict(formData)
    }

    return (
      <section ref={ref} className="relative z-10 px-4 py-20" id="predict">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Vehicle <span className="text-primary">Details</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Enter your car specifications for an AI-powered valuation
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-xl sm:p-8 shadow-[0_0_40px_rgba(6,182,212,0.05)]">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <InputField
                  label="Year of Purchase"
                  icon={Calendar}
                  type="number"
                  value={formData.yearOfPurchase}
                  onChange={update("yearOfPurchase")}
                  placeholder="e.g. 2018"
                />
                <InputField
                  label="Present Price (Lakhs)"
                  icon={DollarSign}
                  type="number"
                  value={formData.presentPrice}
                  onChange={update("presentPrice")}
                  placeholder="e.g. 5.59"
                />
                <InputField
                  label="Kilometers Driven"
                  icon={GaugeIcon}
                  type="number"
                  value={formData.kmsDriven}
                  onChange={update("kmsDriven")}
                  placeholder="e.g. 27000"
                />
                <SelectField
                  label="Fuel Type"
                  icon={Fuel}
                  value={formData.fuelType}
                  onChange={update("fuelType")}
                  options={[
                    { value: "Petrol", label: "Petrol" },
                    { value: "Diesel", label: "Diesel" },
                    { value: "CNG", label: "CNG" },
                  ]}
                />
                <SelectField
                  label="Seller Type"
                  icon={Users}
                  value={formData.sellerType}
                  onChange={update("sellerType")}
                  options={[
                    { value: "Dealer", label: "Dealer" },
                    { value: "Individual", label: "Individual" },
                  ]}
                />
                <SelectField
                  label="Transmission"
                  icon={Settings}
                  value={formData.transmission}
                  onChange={update("transmission")}
                  options={[
                    { value: "Manual", label: "Manual" },
                    { value: "Automatic", label: "Automatic" },
                  ]}
                />
                <SelectField
                  label="Previous Owners"
                  icon={Car}
                  value={formData.owners}
                  onChange={update("owners")}
                  options={[
                    { value: "0", label: "0 (First Owner)" },
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Predict Selling Price
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    )
  }
)
