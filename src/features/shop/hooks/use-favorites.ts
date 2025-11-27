'use client';

import { useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const isFavorite = (productId: number) => favorites.includes(productId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
