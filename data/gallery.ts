/** 소식 페이지 생활 사진 (영업용 데모, 스톡 사진). 새 사진 추가 = 배열에 객체 하나 추가. */
import { PHOTOS } from "@/data/photos";

export const GALLERY = [
  { caption: "오늘 제일 크게 웃으신 날", photo: PHOTOS.laughing },
  { caption: "머리 다듬는 날", photo: PHOTOS.haircut },
  { caption: "볕 좋은 오후", photo: PHOTOS.redVest },
  { caption: "꽃밭에서", photo: PHOTOS.flowerEar },
] as const;
