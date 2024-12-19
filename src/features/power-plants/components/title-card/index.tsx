import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

interface TitleCardUsineiroProps {
  title: string;
  description: string;
}

export function TitleCardUsineiro({ title, description }: TitleCardUsineiroProps) {

  const billingData: BillingData = {
    month: 'outubro',
    hasInvoice: true,
  };

  const units: Unit[] = [
    {
      id: '1',
      name: 'Usina 1',
    },
    {
      id: '2',
      name: 'Usina 2',
    },
    {
      id: '3',
      name: 'Usina 3',
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
    console.log("Nova usina adicionada");
  };

  return (
    <div className="space-y-4 w-full">
      <Card className="rounded-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        
        <CardFooter className={`flex items-center justify-start p-4 gap-6 bg-tertiary rounded-b-sm ${billingData?.hasInvoice ? 'border-none' : 'border-t'}`}>
          <div className="ml-2">
            <p className="text-md font-semibold text-card-foreground">
              Exibir de todas as usinas ({selectedUnits.length || 0})
            </p>
            <p className="text-xs">{selectedUnits.length || 0} usinas atualmente selecionadas.</p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0 rounded-sm bg-card border-none"
              >
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[200px] rounded-md bg-card shadow-md p-2" align="start">
              <DropdownMenuLabel className="text-xs text-card-muted px-2">Usinas</DropdownMenuLabel>
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
                <span>Adicionar Usina</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>
    </div>
  );
}
