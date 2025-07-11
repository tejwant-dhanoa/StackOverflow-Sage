"use client";

import React, { useState, useEffect } from 'react';

const STAR_COUNT = 150;

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  animationDelay: string;
  animationDuration: string;
}

export function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: STAR_COUNT }).map((_, i) => {
      const size = `${Math.random() * 2 + 1}px`;
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: size,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 3}s`,
      };
    });
    setStars(generatedStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </>
  );
}
