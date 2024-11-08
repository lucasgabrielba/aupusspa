'use client'

import { EnergyCompensationChart } from "./energy-compensation-chart"
import { CreditAccumulatedChart } from "./credit-accumulated-chart"
import { MonthlyConsumptionChart } from "./monthly-consumption-chart"
import { MonthlyEconomyChart } from "./monthly-economy-chart"
import { CostWithWithoutGenerationChart } from "./cost-with-without-generation-chart"

export function GenerationDashboard() {


  return (
    <div className="space-y-6 bg-secondary  h-full">
      <div className="grid gap-6 md:grid-cols-2">
      <MonthlyEconomyChart/>

 
      <CostWithWithoutGenerationChart/>
      </div>

      <div className="space-y-6">
        <EnergyCompensationChart />

        <CreditAccumulatedChart />

        <MonthlyConsumptionChart />
      </div>
    </div>
  )
}