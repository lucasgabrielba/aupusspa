/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AttachmentsManager } from "./AttachmentsManager";

type AttachmentsCardProps = {
  entityId: string;
  initialAttachments: any[];
  mutateUpload: (data: FormData) => any; 
  isPending: boolean;
};

export function AttachmentsCard({ entityId, initialAttachments, mutateUpload, isPending }: AttachmentsCardProps) {
  return (
    <Card className='max-w-full overflow-hidden'>
      <CardHeader>
        <CardTitle>Arquivos</CardTitle>
        <CardDescription>Adicione ou visualize seus arquivos.</CardDescription>
      </CardHeader>
      <CardContent>
      <AttachmentsManager
        entityId={entityId}
        initialAttachments={initialAttachments}
        mutateUpload={mutateUpload}
        isPending={isPending}
      />
      </CardContent>
    </Card>
  );
}
