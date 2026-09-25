/** 하루 일과 (영업용 데모 예시). 실제 계약 시 시설의 일과표로 교체. */
import { PHOTOS } from "@/data/photos";

export const DAILY = [
  {
    time: "07:00",
    title: "커튼 걷고, 아침",
    text: "창가 쪽 어르신부터 햇빛을 받으십니다. 아침 식사는 드시기 편한 식감으로 준비합니다.",
    photo: PHOTOS.window,
  },
  {
    time: "10:00",
    title: "거실에서 체조",
    text: "의자에 앉아서 하는 동작 위주라 휠체어를 쓰시는 분도 같이 하십니다.",
    photo: PHOTOS.thumbsUp,
  },
  {
    time: "14:00",
    title: "원예·인지활동 시간",
    text: "화분 가꾸기, 색칠하기처럼 손을 쓰는 활동을 매일 오후에 합니다. 요양보호사가 옆에서 거듭니다.",
    photo: PHOTOS.flowerEar,
  },
  {
    time: "15:30",
    title: "간식과 따뜻한 차",
    text: "오후 프로그램이 끝나면 간식을 드립니다. 주간 식단표는 소식 게시판에 올려 둡니다.",
    photo: PHOTOS.tea,
  },
  {
    time: "16:00",
    title: "정원 한 바퀴",
    text: "날이 좋으면 완만한 산책로를 따라 정원을 걷습니다. 벤치가 중간중간 있습니다.",
    photo: PHOTOS.flowerBench,
  },
  {
    time: "20:00",
    title: "불 끄기 전",
    text: "저녁 약을 챙겨 드리고 잠자리를 봐 드립니다. 밤에는 야간 근무자가 방을 돕니다.",
    photo: PHOTOS.bedroom,
  },
] as const;
