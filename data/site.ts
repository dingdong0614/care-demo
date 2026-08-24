/**
 * 온담요양원 사이트 전역 설정 (영업용 데모 — 더미 데이터).
 * 이 파일의 값만 바꾸면 화면에 그대로 반영됩니다. (컴포넌트 코드 수정 불필요)
 * 실제 계약 시 이 파일 전체를 실제 요양원 정보로 교체하세요.
 */

export const SITE_CONFIG = {
  name: "온담요양원",
  nameEn: "Ondam Care",
  slogan: "따뜻함을 담은 노후",
  directorName: "이정숙 원장",
  founded: "2011년",
  grade: "장기요양기관 평가 A등급",
  capacity: "49인",
  addressFull: "경기도 용인시 수지구 죽전로 45",
  addressShort: "용인시 수지구 죽전동 · 분당수지 IC 5분",
  contact: {
    phone: "031-000-0000",
    fax: "031-000-0001",
    email: "hello@ondam-care.kr",
    hours: "평일 09:00 ~ 18:00 (전화 상담은 24시간 가능)",
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  },
  operator: {
    representative: "이정숙",
    bizNumber: "000-00-00000",
  },
  naverMapUrl: "https://map.naver.com/p/search/온담요양원",
} as const;
