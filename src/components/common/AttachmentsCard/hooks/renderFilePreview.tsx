import { FileText, File, FileArchive, FileCode } from "lucide-react";

export function renderFilePreview(url: string, fileType: string) {
  switch (fileType.split("/")[0]) {
    case "image":
    case "png":
    case "jpeg":
    case "jpg":
    case "gif":
    case "svg+xml":
    case "webp":
      return (
        <img
          alt="Preview"
          className="max-w-full max-h-[80vh] rounded-md object-contain"
          src={url}
        />
      );
      
    case "application":
      if (fileType.includes("pdf")) {
        return (
          <embed src={url} type="application/pdf" className="w-full h-[80vh] rounded-md" />
        );
      }
      if (fileType.includes("zip") || fileType.includes("compressed")) {
        return (
          <div className="flex items-center justify-center w-full h-full rounded-md bg-muted">
            <FileArchive className="w-8 h-8 text-muted-foreground" />
          </div>
        );
      }
      if (fileType.includes("json") || fileType.includes("javascript") || fileType.includes("xml")) {
        return (
          <div className="p-4 bg-muted rounded-md">
            <FileCode className="w-8 h-8 text-muted-foreground" />
            <p className="mt-2 text-sm">Visualização de código não suportada.</p>
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center w-full h-full rounded-md bg-muted">
          <File className="w-8 h-8 text-muted-foreground" />
        </div>
      );
      
    case "video":
      return (
        <video controls className="max-w-full max-h-[80vh] rounded-md object-contain">
          <source src={url} type={fileType} />
          Seu navegador não suporta a exibição de vídeos.
        </video>
      );

    case "audio":
      return (
        <audio controls className="w-full">
          <source src={url} type={fileType} />
          Seu navegador não suporta a reprodução de áudio.
        </audio>
      );
      
    case "text":
      return (
        <div className="p-4 bg-muted rounded-md">
          <FileText className="w-8 h-8 text-muted-foreground" />
          <p className="mt-2 text-sm">Visualização de arquivo de texto não suportada.</p>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center w-full h-full rounded-md bg-muted">
          <File className="w-8 h-8 text-muted-foreground" />
        </div>
      );
  }
}
