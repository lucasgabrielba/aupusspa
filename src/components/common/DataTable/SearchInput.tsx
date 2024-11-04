import { Input } from '@/components/ui/input';
import { X, Search } from 'lucide-react';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  inputProps: {
    id: string;
    placeholder: string;
  };
}

export function SearchInput({ value, setValue, inputProps }: InputProps) {
  return (
    <div className="relative w-full">
      <Input
        id={inputProps.id}
        placeholder={inputProps.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-10 text-lg p-4 pr-10 border rounded-sm peer"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {value ? (
          <button onClick={() => setValue('')} className="focus:outline-none">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        ) : (
          <Search className="w-5 h-5 text-gray-500" />
        )}
      </div>
    </div>
  );
}
