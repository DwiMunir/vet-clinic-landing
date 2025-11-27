'use client';

import { useState } from 'react';

export function useBlogInteractions() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleLike = () => setIsLiked((prev) => !prev);
  const toggleBookmark = () => setIsBookmarked((prev) => !prev);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = document.title;

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return {
    isLiked,
    isBookmarked,
    toggleLike,
    toggleBookmark,
    handleShare,
  };
}
