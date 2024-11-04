import { Loader2 } from 'lucide-react';
import * as React from 'react';

interface SpinnerProps {
  className?: string;
}

export const Spinner: React.FC = ({ className }: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`w-6 h-6 animate-spin ${className}`} />
    </div>
  );
};

