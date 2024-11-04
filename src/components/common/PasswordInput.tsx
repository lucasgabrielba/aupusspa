import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface PasswordInputProps {
  id: string;
  label: string;
  showPasswordInitially?: boolean;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

export function PasswordInput({
  id,
  label,
  showPasswordInitially = false,
  placeholder = '',
  register
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(showPasswordInitially);

  return (
    <div className="relative grid gap-3">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <Input
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className="pr-10"
          {...register} // Passa o register aqui
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </div>
      </div>
    </div>
  );
}
