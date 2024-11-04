import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export  function ConsumerUnitsMap() {
  return (
    <Card className="w-full bg-card text-card-foreground h-full rounded-sm">
      <CardHeader>
        <CardTitle>Mapa de localização das unidades consumidoras</CardTitle>
        <CardDescription>
          Visualizar a localização geográfica das unidades consumidoras para facilitar o monitoramento de consumo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
          <img 
            src="https://tile.openstreetmap.org/7/63/42.png" 
            alt="Mapa de localização"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0">
            <MapPin className="absolute top-1/2 left-1/3 w-6 h-6 text-primary -translate-x-1/2 -translate-y-1/2" />
            <MapPin className="absolute top-1/3 left-1/2 w-6 h-6 text-primary -translate-x-1/2 -translate-y-1/2" />
            <MapPin className="absolute top-2/3 left-1/2 w-6 h-6 text-primary -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}