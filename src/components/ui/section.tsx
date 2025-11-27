import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn('py-16 sm:py-20 lg:py-24', className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center mb-12', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
}
