/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

interface SaveButtonProps {
  isPending: boolean;
  [key: string]: any;
}

export function SaveButton({ isPending, ...props }: SaveButtonProps) {
  return (
    <Button className='bg-tertiary text-tertiary-foreground' disabled={isPending} {...props}>
      {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {isPending ? 'Salvando' : 'Salvar'}
    </Button>
  );
}