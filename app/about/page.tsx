import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { RevealOnScroll } from "@/components/Reveal";
import { FACILITIES } from "@/data/facilities";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "시설소개",
  description: `${SITE_CONFIG.name} 원장 인사말, 걸어온 길, 시설 공간을 소개합니다.`,
};

const TIMELINE = [
  { year: "2011", event: "용인시 수지구에 온담요양원 개원" },
  { year: "2015", event: "정원 49인 규모로 증축, 프로그램실 신설" },
  { year: "2021", event: "장기요양기관 평가 A등급 최초 획득" },
  { year: "2026", event: "정원 산책로 리모델링, 4년 연속 A등급 유지" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="시설소개"
        title="한 분 한 분을 기억하는 요양원"
        desc={`${SITE_CONFIG.name}이 걸어온 길과 지금의 시설을 소개합니다.`}
      />

      <section className="border-b border-line bg-bg py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <RevealOnScroll>
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1765896387398-1e1ae8d2eb85?auto=format&fit=crop&w=1000&q=80"
                alt="어르신과 눈을 맞추며 이야기를 나누는 요양보호사"
                fill
                sizes="(max-width: 767px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.14em] text-accent-strong">원장 인사말</p>
            <div className="mt-5 space-y-4 text-text-muted leading-relaxed">
              <p>
                안녕하세요, {SITE_CONFIG.name} {SITE_CONFIG.directorName}입니다. 저희는 큰 시설이
                아닙니다. 하지만 작다는 것은 어르신 한 분 한 분의 컨디션과 취향을 기억할 수 있다는
                뜻이기도 합니다.
              </p>
              <p>
                거동이 불편해지신 것도, 낯선 곳에 모신다는 죄송함도 가족들에게는 쉽지 않은
                결정입니다. 저희는 그 마음을 알기에 첫 상담부터 입소 이후까지 있는 그대로
                솔직하게 안내해 드립니다.
              </p>
              <p>언제든 편하게 방문하시어 시설을 직접 둘러봐 주세요.</p>
            </div>
            <p className="mt-6 font-display text-lg text-text">{SITE_CONFIG.directorName}</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-24">
        <div className="wrap">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">걸어온 길</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">작게 시작해, 꾸준히 지켜온 시간</h2>
          </RevealOnScroll>

          <div className="mt-10 divide-y divide-line border-t border-line">
            {TIMELINE.map((t, i) => (
              <RevealOnScroll key={t.year} delay={i * 0.06}>
                <div className="flex items-baseline gap-6 py-5">
                  <span className="w-16 shrink-0 font-display text-lg text-accent-strong">{t.year}</span>
                  <span className="text-text-muted">{t.event}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="wrap">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">시설안내</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">어르신의 하루가 머무는 공간</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <RevealOnScroll key={f.name} delay={i * 0.08}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 font-display text-lg">{f.name}</p>
                <p className="mt-1 text-sm text-text-muted">{f.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
