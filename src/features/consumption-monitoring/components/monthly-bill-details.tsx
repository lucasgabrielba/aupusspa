import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Share } from "lucide-react" // Importando ícones do Lucide

import { Button } from "@/components/ui/button"

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
    { label: "UFER II", value: "R$ 0,00" },
    { label: "UFER FP", value: "R$ 0,00" },
    { label: "Fator de potência", value: "R$ 0,00" },
    { label: "BANDEIRA", value: "R$ 0,00", highlight: true },
    { label: "TUSD", value: "R$ 0,00" },
    { label: "TE", value: "R$ 0,00" },
    { label: "PIS", value: "R$ 0,00" },
    { label: "ICMS", value: "R$ 0,00" },
    { label: "CONFINS", value: "R$ 0,00" },
    { label: "Multas", value: "R$ 0,00" },
  ]

  return (
    <Card className={`rounded-sm w-full ${className}`}>
      <CardHeader className="flex flex-row w-full justify-between border-b">
        <div>
          <CardTitle className="text-base font-semibold">
            Entenda a conta do mês atual
          </CardTitle>
          <CardDescription>
            Ultima atualização: Hoje ás 15:00
          </CardDescription>
        </div>

        <Button variant="ghost" size="icon" className="text-card-foreground border-2 rounded-sm">
          <Share className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
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
      </CardContent>
      <CardFooter className="border-t flex justify-between items-center p-4">
        <span className="text-sm">21 de Outubro de 2024</span>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="text-card w-6 h-6 bg-card-foreground rounded-sm flex justify-center items-center">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-card w-6 h-6 bg-card-foreground rounded-sm flex justify-center items-center">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>

    </Card>
  )
}
