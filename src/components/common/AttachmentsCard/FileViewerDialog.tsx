// src/components/common/FileViewerDialog.tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { renderFilePreview } from "./hooks/renderFilePreview";
import { Attachment } from "@/types/utils/attachment";
import { getAttachmentUrl } from "./getFileTypeLabel";


interface FileViewerDialogProps {
  files: Attachment[];
  initialIndex: number;
  onClose: () => void;
}

export function FileViewerDialog({ files, initialIndex, onClose }: FileViewerDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleDownload = async () => {
    try {
      const response = await fetch(getAttachmentUrl(files[currentIndex].path));
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = files[currentIndex].caption || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Falha ao baixar o arquivo:", error);
    }
  };

  const handleNext = () => {
    if (currentIndex < files.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] w-full max-w-[900px] mx-auto">
        <DialogHeader>
          <DialogTitle>{files[currentIndex].caption || "Visualizando Arquivo"}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center mb-4">
          {renderFilePreview(getAttachmentUrl(files[currentIndex].path), files[currentIndex].type)}
        </div>
        <div className="flex justify-between mb-4">
          <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
            Anterior
          </Button>
          <Button variant="outline" onClick={handleNext} disabled={currentIndex === files.length - 1}>
            Próximo
          </Button>
        </div>
        <DialogFooter className="flex flex-row">
          <Button variant="default" onClick={handleDownload} className="w-full">
            <Download className="mr-2 h-4 w-4" /> Baixar
          </Button>
          <Button variant="outline" className="w-full" onClick={onClose}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
