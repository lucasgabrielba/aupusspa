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
   unidade: { top: "UC092101011", bottom: "Pires do Rio - GO" },
   tipo: { top: "Verde", subType: "A2", color: "bg-emerald-500" },
   consumoMedio: { top: "0 kWh", bottom: "00/00/0000" },
   credito: { top: "0 kWh", bottom: "R$ 0,00" }
 },
 {
   cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
   localizacao: { top: "Endereço...", bottom: "Equatorial" },
   unidade: { top: "UC 092101011", bottom: "Pires do Rio - GO" },
   tipo: { top: "Verde", subType: "A2", color: "bg-emerald-500" },
   consumoMedio: { top: "0 kWh", bottom: "00/00/0000" },
   credito: { top: "0 kWh", bottom: "R$ 0,00" }
 },
 {
   cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
   localizacao: { top: "Endereço...", bottom: "Equatorial" },
   unidade: { top: "UC 092101011", bottom: "Pires do Rio - GO" },
   tipo: { top: "Verde", subType: "A2", color: "bg-emerald-500" },
   consumoMedio: { top: "0 kWh", bottom: "00/00/0000" },
   credito: { top: "0 kWh", bottom: "R$ 0,00" }
 },
 {
   cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
   localizacao: { top: "Endereço...", bottom: "Equatorial" },
   unidade: { top: "UC/UG 092101011", bottom: "Pires do Rio - GO" },
   tipo: { top: "B", subType: "B3", color: "bg-orange-500" },
   consumoMedio: { top: "0 kWh", bottom: "00/00/0000" },
   credito: { top: "0 kWh", bottom: "R$ 0,00" }
 },
 {
   cliente: { top: "Olívio Fiorentino", bottom: "#UUID1234" },
   localizacao: { top: "Endereço...", bottom: "Equatorial" },
   unidade: { top: "U/G 092101011", bottom: "Pires do Rio - GO" },
   tipo: { top: "B", subType: "B3", color: "bg-orange-500" },
   consumoMedio: { top: "0 kWh", bottom: "00/00/0000" },
   credito: { top: "0 kWh", bottom: "R$ 0,00" }
 }
]

export default function LeaseTableCard() {
 return (
   <Card className="w-full bg-card">
     <CardHeader className="space-y-6">
       <div>
         <CardTitle>Arrendamento</CardTitle>
         <CardDescription>
           Gerencie os arrendamentos
         </CardDescription>
       </div>
       <div className="flex items-center gap-2">
         <Input placeholder="Pesquisar por..." className="bg-card rounded-sm" />
         <Button className="bg-card-foreground text-card rounded-xs" size="sm">
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
             <TableHead>Consumo médio</TableHead>
             <TableHead>Crédito</TableHead>
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
                 <Badge className={`${row.tipo.color} text-white`}>{row.tipo.top}</Badge>
                 <div className="text-sm text-muted-foreground">{row.tipo.subType}</div>
               </TableCell>
               <TableCell>
                 <div className="text-card-foreground">{row.consumoMedio.top}</div>
                 <div className="text-sm text-muted-foreground">{row.consumoMedio.bottom}</div>
               </TableCell>
               <TableCell>
                 <div className="text-card-foreground">{row.credito.top}</div>
                 <div className="text-sm text-muted-foreground">{row.credito.bottom}</div>
               </TableCell>
               <TableCell>
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
       <p className="text-sm text-muted-foreground">
         Vendo 1-5 de {data.length} beneficiados
       </p>
     </CardFooter>
   </Card>
 )
}