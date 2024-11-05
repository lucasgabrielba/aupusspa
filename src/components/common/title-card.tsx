import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Unit } from "@/types/dtos/unit-dto";
import { ChevronsUpDown, Plus } from "lucide-react";
import React from "react";

interface BillingData {
  month: string;
  hasInvoice: boolean;
}

interface TitleCardProps {
  title: string;
  description: string;
}

export function TitleCard({ title, description }: TitleCardProps) {

  const billingData: BillingData = {
    month: 'outubro',
    hasInvoice: true,
  };

  const units: Unit[] = [
    {
      id: '1',
      name: 'Unidade 1',
    },
    {
      id: '2',
      name: 'Unidade 2',
    },
    {
      id: '3',
      name: 'Unidade 3',
    },
  ]

  const [selectedUnits, setSelectedUnits] = React.useState([]);

  const handleSetUnit = (unit) => {
    setSelectedUnits((prev) => {
      if (prev.find((u) => u.id === unit.id)) {
        return prev.filter((u) => u.id !== unit.id);
      }
      return [...prev, unit];
    });
  };

  const handleNewUnit = () => {
    console.log("Nova unidade adicionada");
  };

  return (
    <div className="space-y-4 w-full">
      <Card className="rounded-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {billingData?.hasInvoice && (
          <Card className="rounded-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                As faturas referentes ao mês de {billingData.month} já estão disponíveis para pagamento!
              </CardTitle>
              <CardDescription>
                Clique em <span className="font-semibold">baixar suas faturas</span> e use o app do seu banco para seguir com o pagamento!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-card-foreground space-y-2">
              <Button variant="outline" className="bg-card-foreground text-card rounded-sm border-none">
                Baixar minhas faturas
              </Button>
            </CardContent>
          </Card>
        )}
        <CardFooter className={`flex items-center justify-start p-4 gap-6 bg-tertiary rounded-b-sm ${billingData?.hasInvoice ? 'border-none' : 'border-t'}`}>
          <div className="ml-2">
            <p className="text-md font-semibold text-card-foreground">
              Exibir de todas as unidades geradoras ({selectedUnits.length || 0})
            </p>
            <p className="text-xs">{selectedUnits.length || 0} unidades consumidoras atualmente selecionadas.</p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0 rounded-sm"
              >
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[200px] rounded-md bg-card shadow-md p-2" align="start">
              <DropdownMenuLabel className="text-xs text-card-muted px-2">Unidades</DropdownMenuLabel>
              {units.map((unit) => {
                const isSelected = selectedUnits.find((u) => u.id === unit.id);
                return (
                  <DropdownMenuItem
                    key={unit.id}
                    onClick={() => handleSetUnit(unit)}
                    className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-card-hover"
                  >
                    <input
                      type="checkbox"
                      checked={!!isSelected}
                      onChange={() => handleSetUnit(unit)}
                      className="form-checkbox h-4 w-4 text-card-accent border-card-border"
                    />
                    <span className="truncate text-card-foreground">{unit.name}</span>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator className="my-1 border-card-border" />
              <DropdownMenuItem
                onClick={handleNewUnit}
                className="flex items-center gap-2 p-2 text-sm rounded-sm cursor-pointer hover:bg-card-hover"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-md border border-card-border">
                  <Plus className="w-4 h-4 text-card-foreground" />
                </div>
                <span>Adicionar Unidade</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>
    </div>
  );
}
