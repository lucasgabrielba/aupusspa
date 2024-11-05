import { Layout } from '@/components/common/Layout';
import { TitleCard } from '@/components/common/title-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function OpportunitiesPage() {
  return (
    <Layout>
      <Layout.Main>
        {/* Primeira linha: TitleCard */}
        <TitleCard title='Rastreador de oportunidades' description='Identifique oportunidades de lucro e otimize o consumo das unidades selecionadas' />

        {/* Segunda linha: Dois cards lado a lado */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
          <Card className="flex-1 min-w-[300px] lg:w-1/2 rounded-sm bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Lucro Potencial Mensal por Categoria</CardTitle>
              <CardDescription>Descubra novas oportunidades de aumento de lucro adaptadas para o seu negócio!</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-card-foreground space-y-2">
              <Button variant="outline" className="bg-card-foreground text-card rounded-sm border-none">
                Eu quero saber mais
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-1 min-w-[300px] lg:w-1/2 rounded-sm bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Média de consumo por unidade consumidoras</CardTitle>
              <CardDescription>Compare o consumo médio entre unidades e identifique onde economizar!</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-card-foreground space-y-2">
              <Button variant="outline" className="bg-card-foreground text-card rounded-sm border-none">
                Vamos otimizar
              </Button>
            </CardContent>
          </Card>
        </div>

      </Layout.Main>
    </Layout>
  );
}
