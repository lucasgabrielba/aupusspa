'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { EnergyCompensationChart } from "./energy-compensation-chart"
import { CreditAccumulatedChart } from "./credit-accumulated-chart"
import { MonthlyConsumptionChart } from "./monthly-consumption-chart"

export function GenerationDashboard() {
  const monthlyData = [
    { month: 'Jan', value1: 200, value2: 150, value3: 180 },
    { month: 'Feb', value1: 150, value2: 170, value3: 160 },
    { month: 'Mar', value1: 180, value2: 160, value3: 170 },
    { month: 'Apr', value1: 170, value2: 180, value3: 190 },
    { month: 'May', value1: 190, value2: 150, value3: 160 },
    { month: 'Jun', value1: 160, value2: 170, value3: 180 },
  ]

  return (
    <div className="space-y-6 bg-secondary  h-full">
      <div className="grid gap-6 md:grid-cols-2">
        <Card >
          <CardHeader>
            <CardTitle className="text-card-foreground">Economia mensal</CardTitle>
            <p className="text-sm text-card-foreground">Análise da economia mensal no tempo</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                <Line type="monotone" dataKey="value1" stroke="#2563eb" />
                <Line type="monotone" dataKey="value2" stroke="#dc2626" />
                <Line type="monotone" dataKey="value3" stroke="#eab308" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card >
          <CardHeader>
            <CardTitle className="text-card-foreground">Custo com e sem geração</CardTitle>
            <p className="text-sm text-card-foreground">Comparando todos os 100 períodos selecionados</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                <Line type="monotone" dataKey="value1" stroke="#3b82f6" />
                <Line type="monotone" dataKey="value2" stroke="#ef4444" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <EnergyCompensationChart />

        <CreditAccumulatedChart />

        <MonthlyConsumptionChart />
      </div>
    </div>
  )
}