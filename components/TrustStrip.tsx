import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

/** 한눈에 보는 기본 정보. 평가등급은 site.ts에 실제 값이 있을 때만 표시. */
const STATS = [
  { label: "개원", value: SITE_CONFIG.founded },
  { label: "정원", value: SITE_CONFIG.capacity },
  { label: "전화 상담", value: "24시간" },
  { label: "위치", value: "분당수지 IC 5분" },
  ...(SITE_CONFIG.grade ? [{ label: "평가등급", value: SITE_CONFIG.grade as string }] : []),
];

export default function TrustStrip() {
  return (
    <section aria-label="시설 기본 정보" className="border-y border-line bg-bg-alt">
      <RevealOnScroll className="wrap">
        <dl className="grid grid-cols-2 divide-line md:grid-flow-col md:auto-cols-fr md:grid-cols-none md:divide-x">
          {STATS.map((s) => (
            <div key={s.label} className="px-1 py-6 md:px-8 md:py-8 md:first:pl-0">
              <dt className="text-[16px] text-text-faint">{s.label}</dt>
              <dd className="mt-1 font-display text-[24px] font-bold text-text md:text-[28px]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </RevealOnScroll>
    </section>
  );
}
