import React from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  showPassword: boolean;
  onChange: (value: string) => void;
  onToggleVisibility: () => void;
  icon: LucideIcon;
  required?: boolean;
}

export function PasswordInput({
  id,
  label,
  placeholder,
  value,
  showPassword,
  onChange,
  onToggleVisibility,
  icon: Icon,
  required = true,
}: PasswordInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <Input
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-12 pr-12 h-12"
          required={required}
        />
        <button
          type="button"
          onClick={onToggleVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}
