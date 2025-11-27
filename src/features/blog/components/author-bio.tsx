'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface AuthorBioProps {
  author: string;
  authorAvatar: string;
}

export function AuthorBio({ author, authorAvatar }: AuthorBioProps) {
  const t = useTranslations('blogDetail');

  return (
    <div className="bg-gray-50 rounded-3xl p-8 mt-16">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0">
          <Image
            src={authorAvatar}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{author}</h3>
          <p className="text-gray-600">{t('authorBio')}</p>
        </div>
      </div>
    </div>
  );
}
