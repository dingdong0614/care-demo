import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "입소안내",
  description: `${SITE_CONFIG.name} 입소 대상, 절차, 비용, 필요서류를 안내합니다.`,
};

const STEPS = [
  { step: "1", title: "전화 상담", desc: "어르신 상태와 장기요양등급을 확인하고 궁금한 점을 상담합니다." },
  { step: "2", title: "시설 견학", desc: "생활 공간과 프로그램실을 직접 둘러보실 수 있습니다." },
  { step: "3", title: "서류 접수", desc: "장기요양인정서 등 필요서류를 접수하고 입소를 확정합니다." },
  { step: "4", title: "입소 및 적응", desc: "담당 요양보호사가 배정되어 초기 적응을 함께 돕습니다." },
];

const COSTS = [
  { grade: "장기요양 1등급", desc: "본인부담금 약 20% (기초생활수급자·차상위 경감 별도 적용)" },
  { grade: "장기요양 2등급", desc: "본인부담금 약 20% (기초생활수급자·차상위 경감 별도 적용)" },
  { grade: "장기요양 3~5등급", desc: "시설 입소 가능 여부는 상담을 통해 개별 확인해 드립니다." },
];

const DOCUMENTS = [
  "장기요양인정서 및 개인별장기요양이용계획서",
  "건강진단서 (최근 1개월 이내)",
  "기초생활수급자증명서 또는 차상위 확인서 (해당 시)",
  "신분증 사본 (본인 및 보호자)",
];

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        crumb="입소안내"
        title="상담부터 입소까지, 차근차근"
        desc="장기요양등급 확인부터 서류 준비까지 처음이어도 어렵지 않게 안내해 드립니다."
      />

      <section className="border-b border-line bg-bg py-16 md:py-24">
        <div className="wrap">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">입소 절차</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">4단계로 진행됩니다</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 0.08}>
                <div className="h-full border border-line-strong bg-surface p-7">
                  <span className="font-display text-3xl text-accent-strong">{s.step}</span>
                  <p className="mt-4 font-display text-lg">{s.title}</p>
                  <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-bg-alt py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-2 md:gap-16">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">비용 안내</p>
            <p className="mt-3 font-display text-2xl">장기요양보험 등급별 본인부담금</p>
            <ul className="mt-6 divide-y divide-line border-t border-b border-line">
              {COSTS.map((c) => (
                <li key={c.grade} className="py-4">
                  <p className="font-display text-lg">{c.grade}</p>
                  <p className="mt-1 text-sm text-text-muted">{c.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-text-faint">
              실제 본인부담금은 등급, 감경 여부, 식비·상급침실 이용 등에 따라 달라질 수 있어 상담을 통해
              정확히 안내해 드립니다.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-xs tracking-[0.14em] text-accent-strong">필요 서류</p>
            <p className="mt-3 font-display text-2xl">입소 시 준비해 주세요</p>
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              {DOCUMENTS.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-accent-strong">·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <RevealOnScroll className="wrap flex flex-col items-start gap-5 border border-line-strong bg-surface p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl">장기요양등급이 아직 없으신가요?</p>
            <p className="mt-2 text-sm text-text-muted">등급 신청 절차부터 전화로 편하게 안내해 드립니다.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            상담 문의하기
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
