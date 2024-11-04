import type { Column } from '@tanstack/react-table';

import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface HeaderButtonProps<T> {
  column: Column<T>;
  buttonName: string;
}

export function OrdenationButton<T>(props: HeaderButtonProps<T>) {
  const { column, buttonName } = props;

  return (
    <Button
      className="text-bold gap-2 bg-transparent text-card-foreground hover:bg-card-hover"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {buttonName}
      <ArrowUpDown className="h-4 w-4" />
    </Button>
  );
}
