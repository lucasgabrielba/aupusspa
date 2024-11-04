import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table';
import { formatedDatePtBr } from '@/lib/formatedDatePtBr';
import { History } from '@/types/utils/history';
import { nanoid } from 'nanoid';

interface HistoryCardProps {
  history: History[];
}

export function HistoryCard({ history }: HistoryCardProps) {
  return (
    <Card className='max-w-full overflow-hidden'>
      <CardHeader>
        <CardTitle>Histórico</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mensagem</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history?.map((item) => (
              <TableRow key={nanoid()}>
                <TableCell>
                  <div className="font-medium">{item.message}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{item.author}</div>
                </TableCell>
                <TableCell>
                  <div className="text-muted-foreground text-sm">
                    {formatedDatePtBr(item.date, true)}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
