/**
 * 온담요양원 사이트 전역 설정 (영업용 데모, 더미 데이터).
 * 이 파일의 값만 바꾸면 화면에 그대로 반영됩니다. (컴포넌트 코드 수정 불필요)
 * 실제 계약 시 이 파일 전체를 실제 요양원 정보로 교체하세요.
 */

export const SITE_CONFIG = {
  name: "온담요양원",
  nameEn: "Ondam Care",
  slogan: "따뜻함을 담은 노후",
  directorName: "이정숙 원장",
  founded: "2011년",
  /**
   * 장기요양기관 평가등급. 공단이 공개하는 공식 결과라 데모에서 지어내지 않습니다.
   * 실제 계약 시 해당 시설의 공개 결과를 그대로 입력하세요. 빈 문자열이면 화면에 표시하지 않습니다.
   */
  grade: "",
  capacity: "49인",
  addressFull: "경기도 용인시 수지구 죽전로 45",
  addressShort: "용인시 수지구 죽전동 · 분당수지 IC 5분",
  area: "용인 수지",
  contact: {
    phone: "031-000-0000",
    fax: "031-000-0001",
    email: "hello@ondam-care.kr",
    hours: "평일 09:00 ~ 18:00 (전화 상담은 24시간 가능)",
    visitHours: "평일 09:00 ~ 18:00",
    /** Web3Forms 접근 키(공개용 키). 기본값 그대로면 폼은 '데모 모드'로 동작하고 실제 전송하지 않습니다. */
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  },
  operator: {
    representative: "이정숙",
    bizNumber: "000-00-00000",
  },
  naverMapUrl: "https://map.naver.com/p/search/온담요양원",
  /** 영업용 데모 표기. 실제 운영 사이트로 전환할 때 false로 바꾸면 푸터 안내가 사라집니다. */
  isDemo: true,
} as const;

export const telHref = `tel:${SITE_CONFIG.contact.phone.replace(/-/g, "")}`;
