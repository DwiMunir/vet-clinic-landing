'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Heart, BookmarkPlus, Facebook, Twitter, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  isLiked: boolean;
  isBookmarked: boolean;
  onToggleLike: () => void;
  onToggleBookmark: () => void;
  onShare: (platform: string) => void;
}

export function ShareButtons({
  isLiked,
  isBookmarked,
  onToggleLike,
  onToggleBookmark,
  onShare,
}: ShareButtonsProps) {
  const t = useTranslations('blogDetail');

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={onToggleLike}
      >
        <Heart
          size={18}
          className={isLiked ? 'fill-red-500 text-red-500' : ''}
        />
        {t('like')}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={onToggleBookmark}
      >
        <BookmarkPlus
          size={18}
          className={isBookmarked ? 'fill-secondary text-secondary' : ''}
        />
        {t('bookmark')}
      </Button>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">{t('share')}:</span>
        <button
          onClick={() => onShare('facebook')}
          type="button"
          className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <Facebook size={16} />
        </button>
        <button
          onClick={() => onShare('twitter')}
          type="button"
          className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
        >
          <Twitter size={16} />
        </button>
        <button
          onClick={() => onShare('linkedin')}
          type="button"
          className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
        >
          <Linkedin size={16} />
        </button>
      </div>
    </div>
  );
}
