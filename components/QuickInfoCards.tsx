import Link from "next/link";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

const CARDS = [
  {
    tag: "입소 절차",
    title: "상담부터 입소까지 4단계",
    desc: "장기요양등급 확인, 시설 견학, 서류 준비까지 차근차근 안내해 드립니다.",
    href: "/admission",
    cta: "입소안내 보기",
    wide: true,
  },
  {
    tag: "오시는 길",
    title: SITE_CONFIG.addressShort,
    desc: "네이버 지도로 길찾기를 도와드립니다.",
    href: SITE_CONFIG.naverMapUrl,
    cta: "지도에서 보기",
    external: true,
  },
  {
    tag: "장기요양보험",
    title: "등급별 비용 안내",
    desc: "장기요양보험 등급에 따른 본인부담금을 미리 확인하세요.",
    href: "/admission",
    cta: "비용 확인하기",
  },
];

export default function QuickInfoCards() {
  return (
    <section className="border-b border-line bg-bg-alt py-16 md:py-24">
      <div className="wrap">
        <RevealOnScroll>
          <p className="text-xs tracking-[0.14em] text-accent-strong">처음이신가요?</p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl">궁금하실 만한 정보만 골라 담았습니다</h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <RevealOnScroll
              key={card.tag}
              delay={i * 0.08}
              className={card.wide ? "md:col-span-2" : ""}
            >
              <div className="flex h-full flex-col justify-between border border-line-strong bg-surface p-7">
                <div>
                  <p className="text-xs tracking-[0.1em] text-text-faint">{card.tag}</p>
                  <p className="mt-3 font-display text-xl">{card.title}</p>
                  <p className="mt-2 text-sm text-text-muted">{card.desc}</p>
                </div>
                <Link
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener" : undefined}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:text-accent"
                >
                  {card.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
