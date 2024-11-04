import { Search } from "lucide-react";
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchUC() {
  return (
    <Card className="w-full  bg-transparent text-card-foreground h-full border-none p-0">
      <CardHeader className="mb-2 border border-card rounded-sm p-4">
        <div className="flex items-center bg-card border border-zinc-800 rounded-sm">
          <Search className="ml-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar UC"
            className="flex-1 bg-transparent border-0 text-card-foreground placeholder:text-card-foregorund focus:ring-0"
          />
        </div>
        <CardDescription className="mt-2">
          <p className="text-sm text-card-foregorund">Digite o endereço, cidade ou nome da UC</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-0 bg-transparent">
        <div className="space-y-2">
          {["A", "B", "C"].map((unit) => (
            <Card
              key={unit}
              className="relative bg-card border  overflow-hidden rounded-sm"
            >
              <div className="p-4 space-y-2">
                <h3 className="font-medium">Unidade consumidora {unit}</h3>
                <p className="text-sm text-card-foreground">Rua A, 24{unit} - Goiânia Go</p>
                <Button variant="default" size="sm" className="bg-card-foreground text-card rounded-sm">
                  Ver no mapa
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
