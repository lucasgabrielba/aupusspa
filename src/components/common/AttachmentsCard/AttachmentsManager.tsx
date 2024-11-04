/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { FileViewerDialog } from "./FileViewerDialog";
import { Upload } from "lucide-react";
import { useAttachments } from "./hooks/useAttachments";
import { nanoid } from "nanoid";
import { getAttachmentUrl } from "./getFileTypeLabel";

type AttachmentsManagerProps = {
  entityId: string;
  initialAttachments: any[];
  mutateUpload: (data: FormData) => Promise<any>;
  isPending: boolean;
};

export function AttachmentsManager({ initialAttachments, mutateUpload, isPending }: AttachmentsManagerProps) {
  const { files, onDrop,  newFiles } = useAttachments({ initialAttachments });
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = async () => {
    const formData = new FormData();
    newFiles.forEach((file, index) => {
      formData.append(`attachments[${index}][file]`, file.file);
      formData.append(`attachments[${index}][caption]`, file.caption);
    });
    await mutateUpload(formData);
  };

  const openDialog = (index: number) => {
    setSelectedIndex(index);
    setIsDialogOpen(true);
  };

  console.log(files)

  return (
    <div className="attachments-manager">
      <div className="grid grid-cols-3 gap-4">
        {files.map((file, index) => (
          <div key={nanoid()} className="relative cursor-pointer" onClick={() => openDialog(index)}>
            <CardContent className="flex aspect-square items-center justify-center p-2">
              {file.type.startsWith("image/") ? (
                <img
                  src={getAttachmentUrl(file.path)}
                  alt={`Preview ${index}`}
                  className="aspect-square w-full rounded-md object-cover"
                />
              ) : (
                <img
                src={getAttachmentUrl(file.path)}
                alt={`Preview ${index}`}
                className="aspect-square w-full rounded-md object-cover"
              />
              )}
            </CardContent>
          </div>
        ))}
        <div
          {...getRootProps()}
          className="relative flex aspect-square items-center justify-center border border-dashed rounded-md cursor-pointer hover:bg-muted"
        >
          <input {...getInputProps()} />
          <Upload className="text-muted-foreground" />
        </div>
      </div>

      {newFiles.length > 0 && (
        <div className="mt-4 flex justify-end">
          <Button onClick={handleUpload} disabled={isPending}>
            {isPending ? "Enviando..." : "Enviar Arquivos"}
          </Button>
        </div>
      )}

      {isDialogOpen && (
        <FileViewerDialog
          files={files}
          initialIndex={selectedIndex}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
}
