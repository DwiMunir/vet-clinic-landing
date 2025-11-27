import React from 'react';
import { Input } from '@/components/ui/input';
import type { LucideIcon } from 'lucide-react';

interface TextInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  required?: boolean;
}

export function TextInput({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon: Icon,
  required = true,
}: TextInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-12 h-12"
          required={required}
        />
      </div>
    </div>
  );
}
