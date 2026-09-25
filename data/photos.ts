/**
 * 사진 목록 (Unsplash 무료 라이선스, 대표 확인 풀 UNSPLASH_POOL.md 에서만 선택).
 * 영업용 데모라 스톡 인물 사진을 씁니다. 실제 계약 시 시설 실사진(초상권 동의 확인)으로 교체하세요.
 */
export type Photo = { id: string; alt: string; credit: string; pos?: string };

export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  // 인물 사진: 동아시아계 어르신 (UNSPLASH_POOL_ASIAN.md, 대표 지시 2026-09-25)
  canolaCouple: { id: "photo-1532329683184-6ffd13057d1c", alt: "유채꽃밭에 나란히 선 노부부", credit: "Jaddy Liu", pos: "72% 45%" },
  wickerChair: { id: "photo-1651117860079-d59586c1525f", alt: "등나무 의자에 앉아 쉬시는 할머니", credit: "Bryan Li", pos: "55% 50%" },
  thumbsUp: { id: "photo-1634089916298-9fa27180526c", alt: "환하게 웃으며 엄지를 들어 보이는 할머니", credit: "Eduardo Barrios", pos: "50% 35%" },
  flowerEar: { id: "photo-1612691997195-c11c53dc6aa0", alt: "귀에 노란 꽃을 꽂고 웃는 할머니", credit: "Nathalie Gurtler", pos: "50% 35%" },
  laughing: { id: "photo-1634552516330-ab1ccc0f605e", alt: "크게 웃는 할머니", credit: "Maud Beauregard", pos: "50% 30%" },
  redVest: { id: "photo-1615455243908-93e1fce6cdda", alt: "빨간 조끼를 입고 미소 짓는 할머니", credit: "PerOla Hammar", pos: "50% 30%" },
  director: { id: "photo-1774094135149-bbeeb1767bfa", alt: "파란 체크 셔츠를 입은 백발의 할머니", credit: "Jeremy Brady", pos: "50% 35%" },
  couple: { id: "photo-1625725764771-663bbc578f2e", alt: "웃으며 나란히 선 노부부", credit: "Deedee Geli", pos: "50% 40%" },
  haircut: { id: "photo-1657664057951-17679442315d", alt: "어르신 머리를 다듬어 드리는 모습", credit: "OPPO Find X5 Pro", pos: "50% 40%" },
  tileCouple: { id: "photo-1777214689039-330dfbc5a868", alt: "흰 타일 벽 앞에 나란히 앉은 노부부", credit: "Lei Hwang", pos: "50% 45%" },
  smileRed: { id: "photo-1589985706147-34a101f481d0", alt: "빨간 옷을 입고 웃는 어르신", credit: "Grace Lim", pos: "50% 30%" },
  // 사람 없는 사진 (UNSPLASH_POOL.md)
  window: { id: "photo-1586205009278-cf9854b97d0c", alt: "아침 햇살이 드는 하얀 창", credit: "ANGELICA SABINA", pos: "50% 40%" },
  bedroom: { id: "photo-1560448075-57d0285fc59b", alt: "협탁 램프가 켜진 정돈된 침실", credit: "Francesca Tosolini", pos: "50% 50%" },
  tea: { id: "photo-1602533186068-0ae13d6bde63", alt: "김이 오르는 따뜻한 차 한 잔", credit: "Kateryna Hliznitsova", pos: "50% 50%" },
  flowerBench: { id: "photo-1499399631978-a966e7b231fa", alt: "꽃밭 옆에 놓인 초록 벤치", credit: "Kenniku Tolato", pos: "50% 60%" },
} satisfies Record<string, Photo>;
