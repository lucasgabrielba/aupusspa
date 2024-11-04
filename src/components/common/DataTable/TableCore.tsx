/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table';
import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

interface TableProps<T> {
  table: any;
  columns: ColumnDef<T, any>[];
  flexRender: any;
  navigateUrl?: string;
  field?: string;
}

export function TableCore<T>({
  table,
  columns,
  flexRender,
  navigateUrl,
  field,
}: TableProps<T>) {
  const navigate = useNavigate();

  const handleRowClick = (row: any, field: string) => {
    if (navigateUrl && field) {
      const url = `${navigateUrl}/${row.original[field]}`;
      navigate(url);
    }
  };

  return (
    <Table className="bg-card rounded-sm overflow-hidden">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="text-card-foreground">
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                className="text-card-foreground font-bold"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              onClick={() => handleRowClick(row, field)}
              className={`${navigateUrl ? 'cursor-pointer' : ''} text-card-foreground hover:bg-card-hover`}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center">
              Nenhum resultado encontrado
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
