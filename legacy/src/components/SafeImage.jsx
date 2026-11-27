import { useEffect, useState } from 'react';

const FALLBACK_IMAGE =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
      <rect width="1200" height="700" fill="#e9eef2"/>
      <text x="600" y="350" text-anchor="middle" dominant-baseline="middle"
        font-family="Arial, sans-serif" font-size="34" fill="#52616b">
        Imagem indisponível
      </text>
    </svg>
  `);

export function SafeImage({
  src,
  alt = '',
  priority = false,
  width,
  height,
  onError,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src || FALLBACK_IMAGE);

  useEffect(() => {
    setImageSrc(src || FALLBACK_IMAGE);
  }, [src]);

  function handleError(event) {
    if (imageSrc !== FALLBACK_IMAGE) {
      setImageSrc(FALLBACK_IMAGE);
    }
    onError?.(event);
  }

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
    />
  );
}
