"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts"

const priceByYearData = [
  { year: "2014", price: 1.2 },
  { year: "2015", price: 2.1 },
  { year: "2016", price: 3.0 },
  { year: "2017", price: 3.8 },
  { year: "2018", price: 4.5 },
  { year: "2019", price: 5.2 },
  { year: "2020", price: 4.8 },
  { year: "2021", price: 5.9 },
  { year: "2022", price: 6.3 },
  { year: "2023", price: 7.1 },
]

const featureImportanceData = [
  { feature: "Year", importance: 92 },
  { feature: "Price", importance: 88 },
  { feature: "KMs", importance: 75 },
  { feature: "Fuel", importance: 62 },
  { feature: "Seller", importance: 45 },
  { feature: "Trans.", importance: 38 },
]

const radarData = [
  { metric: "Accuracy", A: 96 },
  { metric: "Speed", A: 92 },
  { metric: "Coverage", A: 88 },
  { metric: "Freshness", A: 85 },
  { metric: "Reliability", A: 94 },
  { metric: "Precision", A: 91 },
]

const chartTooltipStyle = {
  backgroundColor: "rgba(10, 14, 26, 0.95)",
  border: "1px solid rgba(6,182,212,0.2)",
  borderRadius: "8px",
  color: "#e2e8f0",
  fontSize: "12px",
}

export function AnalyticsSection() {
  return (
    <section className="relative z-10 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Market <span className="text-primary">Analytics</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Data-driven insights powering every prediction
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Price vs Year Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Average Price by Year
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={priceByYearData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={{ fill: "#06b6d4", r: 4 }}
                  activeDot={{ r: 6, fill: "#06b6d4", stroke: "#0a0e1a", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Feature Importance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Feature Importance
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={featureImportanceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  type="number"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <YAxis
                  dataKey="feature"
                  type="category"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  width={50}
                />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Bar
                  dataKey="importance"
                  fill="#06b6d4"
                  radius={[0, 4, 4, 0]}
                  barSize={16}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Model Performance Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Model Performance
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }}
                />
                <Radar
                  name="Performance"
                  dataKey="A"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                title: "Model Type",
                value: "Random Forest Regressor",
                description: "Ensemble of 500 decision trees trained on 15K+ data points",
              },
              {
                title: "Last Updated",
                value: "March 2026",
                description: "Model retrained monthly with fresh market data",
              },
              {
                title: "R-Squared Score",
                value: "0.9652",
                description: "Variance explained by the prediction model",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex-1 rounded-xl border border-border bg-card/30 p-5 backdrop-blur-xl"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {card.title}
                </p>
                <p className="mt-1 text-lg font-bold text-primary">{card.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
