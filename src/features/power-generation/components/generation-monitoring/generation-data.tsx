import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Share } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GenerationDataProps {
  className?: string
}

export function GenerationData({ className }: GenerationDataProps) {
  const dataItems = [
    { label: "Número de usinas", value: "3" },
    { label: "Demanda", value: "R$ 0,00" },
    { label: "Falhas", value: "1" },
    { label: "kW", value: "0 kWp" },
    { label: "FC", value: "1,08" },
  ]

  return (
    <Card className={`rounded-sm w-full border-none${className}`}>
      <CardHeader className="flex flex-row w-full justify-between rounded-t-sm items-center bg-tertiary border-b p-4">
        <div>
          <CardTitle className="text-base font-semibold text-card-foreground">
            Dados
          </CardTitle>
          <CardDescription className="text-xs">
            Última atualização: Hoje às 15:00
          </CardDescription>
        </div>

        <Button variant="ghost" size="icon" className="text-card-foreground border-2 rounded-sm">
          <Share className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="p-4 bg-card flex flex-col w-full">
        {dataItems.map((item, index) => (
          <div
            key={index}
            className="border-b py-3 first:pt-0 last:border-0"
          >
            <div className="flex justify-between items-center text-sm text-card-foregorund">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="border-t bg-tertiary flex justify-between rounded-b-sm items-center p-4">
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
