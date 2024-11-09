"use client"

import {
  ChevronLeft,
  ListFilter,
  File,
  CirclePlus,
  Loader,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export default function Benefited() {
  const navigate = useNavigate()

  const beneficiaries = [
    {
      generator: { code: "UG 09210/011", details: "Pres do Rio - GO" },
      beneficiary: { code: "UG 09210/011", details: "Pres do Rio - GO" },
      distribution: "NN %",
      subgroup: "Verde",
      address:
        "Logradouro/Baifahjbdasfhasdbfjbdskfbsdfbasdjfksdfbfkdjsbafkasdhjhfbfkasdhbfahbdsfksbfksbdkbjfdjksfkdsrro...",
      gd: "Compartilhada/Mod...",
      lastDate: "01/01/25",
      avgConsumption: "0 kWh",
    },
    // ... outros beneficiários
  ]

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Cabeçalho */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
        <div className="flex items-baseline w-full justify-start gap-6  flex-col lg:flex-row">
          <div className="flex gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="w-7 h-7 rounded-sm border border-tertiary bg-card"
              onClick={() => navigate("/geracao-de-energia")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <p className="text-xl font-bold">Geração de energia</p>
          </div>
          <Badge className="text-muted-foreground rounded-lg border-tertiary ">
            Beneficiados
          </Badge>
        </div>
        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <Button
            variant="outline"
            size="default"
            className="rounded-sm lg:h-8 bg-card border-tertiary w-full md:w-auto"
          >
            <ListFilter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
          <Button
            variant="outline"
            size="default"
            className="rounded-sm lg:h-8 bg-card border-tertiary w-full md:w-auto"
          >
            <File className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button
            variant="outline"
            size="default"
            className="rounded-sm lg:h-8 bg-card-foreground text-card border-tertiary w-full md:w-auto"
          >
            <CirclePlus className="mr-2 h-4 w-4" />
            Novo
          </Button>
        </div>
      </div>

      {/* Conteúdo */}
      <Card>
        <CardHeader>
          <CardTitle className="font-semibold">
            Lista de beneficiados
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Acompanhe o consumo e utilização dos beneficiados.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 w-full">
          {/* Tabela com scroll horizontal */}
          <div className="overflow-x-auto">
            <Table className="min-w-max w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Geradora</TableHead>
                  <TableHead>Beneficiada</TableHead>
                  <TableHead>Rateio</TableHead>
                  <TableHead>Sub-grupo</TableHead>
                  <TableHead>Endereço</TableHead>
                  <TableHead>GD</TableHead>
                  <TableHead>Última atualização</TableHead>
                  <TableHead>Consumo médio</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beneficiaries.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">
                      <div>
                        <div className="font-medium">
                          {item.generator.code}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.generator.details}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div>
                        <div className="font-medium">
                          {item.beneficiary.code}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.beneficiary.details}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.distribution}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge
                        variant="outline"
                        className={
                          item.subgroup === "Verde"
                            ? "bg-green-800 text-green-400 border-none"
                            : item.subgroup === "Azul"
                              ? "bg-blue-800 text-blue-400 border-none"
                              : "bg-orange-800 text-orange-400 border-none"
                        }
                      >
                        {item.subgroup}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.address}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.gd}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.lastDate}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.avgConsumption}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Button variant="ghost" size="icon">
                        <Loader className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="p-4 text-sm text-muted-foreground">
            Vendo 1-5 de 14 beneficiados
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
