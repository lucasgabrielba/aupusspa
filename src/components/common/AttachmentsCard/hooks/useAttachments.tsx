// src/hooks/useAttachments.tsx
import { Attachment } from "@/types/utils/attachment";
import { useState, useCallback } from "react";

type UseAttachmentsProps = {
  initialAttachments?: Attachment[];
};

export function useAttachments({ initialAttachments = [] }: UseAttachmentsProps) {
  const [files, setFiles] = useState<Attachment[]>(initialAttachments);
  const [newFiles, setNewFiles] = useState<Attachment[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      caption: "",
      path: URL.createObjectURL(file),
      type: file.type,
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    setNewFiles(prevNewFiles => [...prevNewFiles, ...newFiles]);
  }, []);

  const updateFileCaption = (index: number, newCaption: string) => {
    setFiles(prevFiles => {
      const updatedFiles = [...prevFiles];
      updatedFiles[index].caption = newCaption;
      return updatedFiles;
    });
  };

  return {
    files,
    newFiles,
    onDrop,
    updateFileCaption,
  };
}
