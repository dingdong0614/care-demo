import Link from "next/link";
import { ArrowRight, MapPin, ReceiptText, Route } from "lucide-react";
import { RevealOnScroll } from "@/components/Reveal";
import { STEPS, COSTS } from "@/data/admission";
import { SITE_CONFIG } from "@/data/site";

/** 처음 알아보는 가족이 가장 먼저 찾는 세 가지: 절차, 비용, 위치. */
export default function QuickInfoCards() {
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <RevealOnScroll className="max-w-2xl">
          <p className="eyebrow">처음 알아보시는 가족께</p>
          <h2 className="h2 mt-3">가장 많이 물어보시는 세 가지부터 정리했습니다</h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-5">
          <RevealOnScroll className="md:col-span-7 md:row-span-2">
            <Link
              href="/admission"
              className="card group flex h-full flex-col p-7 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent md:p-9"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent">
                <Route aria-hidden size={24} />
              </span>
              <h3 className="mt-5 text-[26px] md:text-[30px]">상담부터 입소까지 4단계</h3>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {STEPS.map((s) => (
                  <li key={s.step} className="flex items-center gap-3 rounded-[12px] bg-bg-alt px-4 py-3">
                    <span className="font-display text-[22px] font-bold text-accent">{s.step}</span>
                    <span className="text-[18px] font-medium">{s.title}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-text-muted">
                장기요양등급 확인, 시설 견학, 서류 준비까지 차근차근 안내해 드립니다.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[18px] font-semibold text-accent">
                입소 절차 자세히 보기
                <ArrowRight aria-hidden size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06} className="md:col-span-5">
            <Link
              href="/admission#cost"
              className="group flex h-full flex-col rounded-[18px] bg-accent p-7 text-on-accent transition-transform duration-200 hover:-translate-y-0.5 md:p-8"
            >
              <span className="flex items-center gap-2 text-[17px] font-semibold text-on-accent/90">
                <ReceiptText aria-hidden size={20} /> 등급별 비용
              </span>
              <p className="mt-4 font-display text-[26px] font-bold leading-snug text-on-accent">
                1·2등급 본인부담금
                <br />
                {COSTS[0].share}
              </p>
              <p className="mt-3 text-[17px] text-on-accent/90">기초생활수급자·차상위는 경감이 따로 적용됩니다.</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[18px] font-semibold">
                비용 확인하기
                <ArrowRight aria-hidden size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12} className="md:col-span-5">
            <a
              href={SITE_CONFIG.naverMapUrl}
              target="_blank"
              rel="noopener"
              className="card group flex h-full flex-col p-7 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent md:p-8"
            >
              <span className="flex items-center gap-2 text-[17px] font-semibold text-accent">
                <MapPin aria-hidden size={20} /> 오시는 길
              </span>
              <p className="mt-4 text-[22px] font-semibold leading-snug">{SITE_CONFIG.addressFull}</p>
              <p className="mt-2 text-text-muted">{SITE_CONFIG.addressShort}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[18px] font-semibold text-accent">
                네이버 지도에서 길찾기
                <ArrowRight aria-hidden size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
                <span className="sr-only">(새 창)</span>
              </span>
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
