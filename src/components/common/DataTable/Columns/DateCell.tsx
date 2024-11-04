import { formatedDatePtBr } from '@/lib/formatedDatePtBr';
import type { Getter } from '@tanstack/react-table';

interface DateCellProps {
  value: Getter<string>;
}

export function DateCell({ value }: DateCellProps) {
  if (!value()) return null;

  const date = value() as string;

  return (
    <div className="flex justify-start px-12">
      <span>{formatedDatePtBr(date)}</span>
    </div>
  );
}
