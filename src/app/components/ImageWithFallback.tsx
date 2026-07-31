import { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  className = "",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      className={className}
      {...props}
    />
  );
}
