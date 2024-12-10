import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MonthlyBillDetailsProps {
  className?: string
}

export function MonthlyBillDetails({ className }: MonthlyBillDetailsProps) {
  const billItems = [
    { label: "Ponta", value: "R$ 0,00" },
    { label: "FP", value: "R$ 0,00" },
    { label: "HR", value: "R$ 0,00" },
    { label: "Demanda", value: "R$ 0,00" },
    { label: "Medido", value: "R$ 0,00" },
    { label: "Faturado", value: "R$ 0,00" },
    { label: "Ultrapassagem", value: "R$ 0,00" },
    { label: "UFER P", value: "R$ 0,00" },
    { label: "UFER FP", value: "R$ 0,00" },
    { label: "Fator de potência", value: "R$ 0,00" },
    { label: "BANDEIRA", value: "R$ 0,00", highlight: true },
    { label: "TUSD", value: "R$ 0,00" },
    { label: "TE", value: "R$ 0,00" },
    { label: "PIS", value: "R$ 0,00" },
    { label: "COFINS", value: "R$ 0,00" },
    { label: "ICMS", value: "R$ 0,00" },
    { label: "DESC. IRRIGANTE", value: "R$ 0,00" },
    { label: "Multas", value: "R$ 0,00" },
  ]

  const measureItems = [
    { label: "kWh Consumido", value: "0 kWh" },
    { label: "Demanda Contratada", value: "0 kW" },
    { label: "Demanda Ultrapassada", value: "0 kW" },
    { label: "Fator de Potência", value: "0.00" },
    { label: "Consumo Médio", value: "0 kWh" },
  ]

  return (
    <Tabs defaultValue="reais" className={`w-full ${className}`}>
      <Card className="rounded-sm w-full">
        <CardHeader className="flex flex-row w-full justify-between border-b">
          <div>
            <CardTitle className="text-base font-semibold">
              Entenda a conta do mês atual
            </CardTitle>
            <CardDescription>
              Última atualização: Hoje às 15:00
            </CardDescription>
          </div>

          <Button variant="ghost" size="icon" className="text-card-foreground border-2 rounded-sm">
            <Share className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="p-4 pt-3 w-full">
          <TabsList className="flex w-full rounded-sm bg-secondary mb-4">
            <TabsTrigger value="reais" className="flex-1 text-center">
              R$
            </TabsTrigger>
            <TabsTrigger value="medidas" className="flex-1 text-center">
              Medidas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reais">
            {billItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-zinc-700 py-3 first:pt-0 last:border-0"
              >
                <div className="flex justify-between items-center text-sm">
                  <span>{item.label}</span>
                  <span className={item.highlight ? "text-emerald-500 font-bold" : ""}>
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="medidas">
            {measureItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-zinc-700 py-3 first:pt-0 last:border-0"
              >
                <div className="flex justify-between items-center text-sm">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  )
}
