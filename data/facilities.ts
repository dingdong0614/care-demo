/** 시설 공간 소개 (영업용 데모, 스톡 사진). 새 항목 추가 = 배열에 객체 하나 추가로 끝. */
import { PHOTOS } from "@/data/photos";

export const FACILITIES = [
  {
    name: "볕 좋은 거실",
    desc: "남향 통창으로 하루 종일 햇살이 드는 공용 거실에서 이웃 어르신들과 담소를 나눕니다.",
    photo: PHOTOS.window,
  },
  {
    name: "정원 산책로",
    desc: "휠체어도 편하게 다닐 수 있는 완만한 산책로와 화단을 갖춘 정원입니다.",
    photo: PHOTOS.flowerBench,
  },
  {
    name: "생활 돌봄",
    desc: "머리 손질처럼 혼자 하시기 어려운 일은 요양보호사가 곁에서 거들어 드립니다.",
    photo: PHOTOS.haircut,
  },
  {
    name: "생활실",
    desc: "개인 물건을 두실 수 있는 협탁과 수납장이 있습니다. 밤에는 은은한 등만 켜 둡니다.",
    photo: PHOTOS.bedroom,
  },
] as const;
