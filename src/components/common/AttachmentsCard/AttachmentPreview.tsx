import { getAttachmentUrl, getFileTypeLabel } from "./getFileTypeLabel";
import { renderFilePreview } from "./hooks/renderFilePreview";
import { Input } from "@/components/ui/input";

export function AttachmentPreview({ fileObj, onCaptionChange }) {
  return (
    <div className="relative w-full h-32 flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-muted rounded-md">
        {renderFilePreview(getAttachmentUrl(fileObj.path), fileObj.type)}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-card-foreground text-xs truncate px-1 z-10">
        <Input
          type="text"
          value={fileObj.caption}
          onChange={(e) => onCaptionChange(e.target.value)}
          className="w-full bg-transparent text-card-foreground"
          placeholder={getFileTypeLabel(fileObj.type)}
        />
      </div>
    </div>
  );
}
