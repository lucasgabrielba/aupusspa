import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { ChevronsUpDown, Info, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function InvoicesTable() {
  const [selectedMonth, setSelectedMonth] = useState("outubro");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedStatus, setSelectedStatus] = useState("Aguardando pagamento");

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const years = ["2023", "2024", "2025"];
  const statuses = ["Aguardando pagamento", "Vencidas", "Pagas"];

  return (
    <div className="bg-transparent text-card-foreground flex flex-col gap-4 w-full">
      <Card>
        <CardHeader>
          <div className="text-sm text-card-foreground">Saldo em energia</div>
          <div className="text-2xl font-semibold">R$2.310,86</div>
          <div className="text-xs text-card-foreground">Previsão para o próximo mês R$ 2.940,00</div>
        </CardHeader>
      </Card>

      <div className="flex items-center w-full gap-4 flex-col lg:flex-row flex-wrap max-w-full">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full lg:w-2/12">
            <Button className="flex items-center bg-card-foreground text-card rounded-sm px-4 py-2 cursor-pointer gap-2 h-10 w-full">
              <Calendar size={16} className="mr-2" />
              <span className="whitespace-nowrap text-sm">Faturas de {selectedYear}</span>
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full" align="start">
            {years.map((year) => (
              <DropdownMenuItem key={year} onClick={() => setSelectedYear(year)}>
                {year}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden lg:flex lg:w-9/12 flex-grow bg-tertiary border-primary gap-2 p-1 rounded-sm items-center justify-between h-10 w-full overflow-x-auto">
          {months.map((month) => (
            <Button
              key={month}
              variant={selectedMonth === month.toLowerCase() ? "default" : "ghost"}
              className={`text-sm px-3 h-8 rounded-xs ${selectedMonth === month.toLowerCase()
                ? "bg-primary text-primary-foreground"
                : "hover:bg-card hover:text-card-foreground"
                }`}
              onClick={() => setSelectedMonth(month.toLowerCase())}
            >
              {month}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex-grow lg:hidden w-full">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-between w-full bg-card px-4 py-2 rounded-sm cursor-pointer gap-2">
            <span>{selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)}</span>
            <ChevronsUpDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full" align="start">
            {months.map((month) => (
              <DropdownMenuItem
                key={month}
                onClick={() => setSelectedMonth(month.toLowerCase())}
                className="cursor-pointer"
              >
                {month}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card className="w-full">
        <CardHeader className="flex gap-4">
          <div className="flex justify-between flex-row gap-2">
            <CardTitle>Faturas de {months.find((month) => month.toLowerCase() === selectedMonth)} de {selectedYear}</CardTitle>
            <Badge variant="green">Verde</Badge>

          </div>

          {/* Status Control */}
          <div className="lg:hidden w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center bg-card-foreground text-card justify-between w-full px-4 py-2 rounded-sm cursor-pointer gap-2">
                <span>{selectedStatus}</span>
                <ChevronsUpDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {statuses.map((status) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className="cursor-pointer"
                  >
                    {status}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden lg:flex gap-2 bg-secondary rounded-sm h-10 p-1 items-center w-96 justify-between">
            {statuses.map((status) => (
              <Button
                key={status}
                className={`px-4 py-1 rounded-xs h-8 text-sm font-medium ${selectedStatus === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-card hover:text-card-foreground text-card-foreground"
                  }`}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </Button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>UC</TableHead>
                <TableHead>Cidade-UF</TableHead>
                <TableHead>Endereço</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vencimento</TableHead>
                <TableHead>kWh</TableHead>
                <TableHead>Grupo</TableHead>
                <TableHead>Ativar compensação</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(7)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>UC-0000102</TableCell>
                  <TableCell>Cidade-UF</TableCell>
                  <TableCell>Rua/número/bairro</TableCell>
                  <TableCell>
                    <span className="bg-card px-2 py-1 rounded text-xs">Em aberto</span>
                  </TableCell>
                  <TableCell>15/11/2024</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>{index === 2 ? 'VERDE' : 'B'}</TableCell>
                  <TableCell>
                    <Switch
                      checked={index === 0}
                      className="data-[state=checked]:bg-success"
                    />
                  </TableCell>
                  <TableCell>R$ 0,00</TableCell>
                  <TableCell>
                    <button className="text-card-foreground hover:text-card">
                      <Info size={16} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
