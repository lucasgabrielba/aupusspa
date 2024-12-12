import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const data = [
  {
    cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
    localizacao: { top: "Endereço...", bottom: "Equatorial" },
    unidade: { top: "UC/UG 092101011", bottom: "Pires do Rio - GO" },
    tipo: { top: "Verde", bottom: "A3a - Rural Irrigante", color: "bg-green-500" },
    demanda: { top: "Fora ponta 0 kW", bottom: "Ponta 0 kW" },
    consumoMedio: { top: "Fora ponta 0 kWh", bottom: "Ponta 0 kWh" }
  },
  {
    cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
    localizacao: { top: "Endereço...", bottom: "Equatorial" },
    unidade: { top: "UC 092101011", bottom: "Pires do Rio - GO" },
    tipo: { top: "Verde", bottom: "A2 - Comercial Baixa", color: "bg-green-500" },
    demanda: { top: "Fora ponta 0 kW", bottom: "Ponta 0 kW" },
    consumoMedio: { top: "Fora ponta 0 kWh", bottom: "Ponta 0 kWh" }
  },
  {
    cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
    localizacao: { top: "Endereço...", bottom: "Equatorial" },
    unidade: { top: "UG 092101011", bottom: "Pires do Rio - GO" },
    tipo: { top: "B", bottom: "B3 - Comercial", color: "bg-orange-500" },
    demanda: { top: "Fora ponta 0 kW", bottom: "Ponta 0 kW" },
    consumoMedio: { top: "Fora ponta 0 kWh", bottom: "Ponta 0 kWh" }
  },
  {
    cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
    localizacao: { top: "Endereço...", bottom: "Equatorial" },
    unidade: { top: "UC/UG 092101011", bottom: "Pires do Rio - GO" },
    tipo: { top: "B", bottom: "B3 - Comercial", color: "bg-orange-500" },
    demanda: { top: "Fora ponta 0 kW", bottom: "Ponta 0 kW" },
    consumoMedio: { top: "Fora ponta 0 kWh", bottom: "Ponta 0 kWh" }
  },
  {
    cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
    localizacao: { top: "Endereço...", bottom: "Equatorial" },
    unidade: { top: "UC/UG 092101011", bottom: "Pires do Rio - GO" },
    tipo: { top: "B", bottom: "B3 - Comercial", color: "bg-orange-500" },
    demanda: { top: "Fora ponta 0 kW", bottom: "Ponta 0 kW" },
    consumoMedio: { top: "Fora ponta 0 kWh", bottom: "Ponta 0 kWh" }
  },
]

export default function ClientTableCard() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-6">
        <div>
          <CardTitle className="text-xl font-semibold">Lista de clientes cadastrados</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Acompanhe o consumo e utilização dos clientes cadastrados
          </CardDescription>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <Input placeholder="Pesquisar por..." className="w-full bg-card" />
          <Button className="bg-card-foreground text-card rounded-sm" size="sm">
            Pesquisar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Unidade</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Demanda</TableHead>
              <TableHead>Consumo médio</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="text-card-foreground">{row.cliente.top}</div>
                  <div className="text-sm text-muted-foreground">{row.cliente.bottom}</div>
                </TableCell>
                <TableCell>
                  <div className="text-card-foreground">{row.localizacao.top}</div>
                  <div className="text-sm text-muted-foreground">{row.localizacao.bottom}</div>
                </TableCell>
                <TableCell>
                  <div className="text-card-foreground">{row.unidade.top}</div>
                  <div className="text-sm text-muted-foreground">{row.unidade.bottom}</div>
                </TableCell>
                <TableCell>
                  <Badge className={`${row.tipo.color} text-withe w-full`}>{row.tipo.top}</Badge>
                  <div className="text-sm text-muted-foreground">{row.tipo.bottom}</div>
                </TableCell>
                <TableCell>
                  <div className="text-card-foreground">{row.demanda.top}</div>
                  <div className="text-sm text-muted-foreground">{row.demanda.bottom}</div>
                </TableCell>
                <TableCell>
                  <div className="text-card-foreground">{row.consumoMedio.top}</div>
                  <div className="text-sm text-muted-foreground">{row.consumoMedio.bottom}</div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </CardContent>
      <CardFooter>
        <p className="flex items-start text-sm text-muted-foreground mt-4">
          Vendo 1-5 de {data.length} beneficiados
        </p>
      </CardFooter>
    </Card>
  )
}
