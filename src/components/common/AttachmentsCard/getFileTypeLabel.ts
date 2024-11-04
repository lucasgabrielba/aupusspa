import { env } from "@/config/env";

export function getFileTypeLabel(fileType: string): string {
  switch (fileType.split("/")[0]) {
    case "image":
      return "Imagem";
    case "video":
      return "Vídeo";
    case "application":
      if (fileType.includes("pdf")) {
        return "PDF";
      }
      return "Documento";
    default:
      return "Arquivo";
  }
}

export function getAttachmentUrl(path: string): string {
  if (path.startsWith("blob:")) {
    return path;
  }

  return `${env.VITE_S3_URL}/${path}`;
}
