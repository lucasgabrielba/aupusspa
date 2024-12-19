import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PayingDetailsCard() {
  const data = [
    { label: "Bandeira amarela", value: "R$ 0,00", color: "#f97316" },
    { label: "Iluminação pública", value: "R$ 0,00", color: "#3b82f6" },
    { label: "Arrendamento", value: "R$ 0,00", color: "#ec4899" },
  ];

  return (
    <Card className="rounded-sm">
      <CardHeader>
        <CardTitle>Entenda o que está pagando</CardTitle>
        <CardDescription>1 unidade no mês atual</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-8 w-full rounded-sm text-card text-sm flex items-center px-4"
            style={{ backgroundColor: item.color }}
          >
            {item.label} - {item.value}
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <p className="text-sm text-card-foreground">
          O mês de Outubro foi o mês que as unidades tiveram o maior custo com arrendamento,
          devido às baixas temperaturas
        </p>
      </CardFooter>
    </Card>
  );
}
