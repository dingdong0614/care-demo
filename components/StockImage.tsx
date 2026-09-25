import Image from "next/image";
import { type Photo, unsplash } from "@/data/photos";

/** 풀에서 고른 Unsplash 사진. 부모 요소가 position:relative 이고 크기를 가져야 합니다. */
export default function StockImage({
  photo,
  sizes,
  priority = false,
  width = 1600,
  className = "",
}: {
  photo: Photo;
  sizes: string;
  priority?: boolean;
  width?: number;
  className?: string;
}) {
  return (
    <Image
      src={unsplash(photo.id, width)}
      alt={photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
      style={{ objectPosition: photo.pos ?? "50% 50%" }}
    />
  );
}
