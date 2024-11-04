import * as React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Loader2 } from 'lucide-react';

interface DeleteDialogProps {
  children: React.ReactNode;
  onConfirm: () => Promise<void>; // Modificado para garantir que a ação seja uma Promise
  isDeleting?: boolean;
  customMessage?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function DeleteDialog({
  children,
  onConfirm,
  isDeleting = false,
  customMessage,
  isOpen,
  setIsOpen,
}: DeleteDialogProps) {
  const handleConfirm = async () => {
    await onConfirm(); // Aguarda a conclusão da confirmação
    setIsOpen(false);  // Fecha o diálogo após a ação ser concluída
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza da exclusão?</AlertDialogTitle>
          <AlertDialogDescription>
            {customMessage || 'Esta ação não pode ser desfeita.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={isDeleting}
            className={`bg-destructive hover:bg-destructive-foreground hover:text-destructive`}
          >
            {isDeleting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {isDeleting ? 'Excluindo' : 'Excluir'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
