import Image from "next/image";
import Link from "next/link";
import { RevealHeading, RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export default function HomeHero() {
  return (
    <section className="border-b border-line bg-bg">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1fr_1.1fr] md:gap-16 md:py-24">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">{SITE_CONFIG.name}</p>
          </RevealOnScroll>
          <RevealHeading
            as="h1"
            text={`내 집 같은 편안함, ${SITE_CONFIG.slogan}`}
            className="mt-4 font-display text-[2rem] leading-[1.25] md:text-[2.6rem]"
          />
          <RevealOnScroll delay={0.15}>
            <p className="mt-6 max-w-md text-text-muted">
              {SITE_CONFIG.name}은 어르신 한 분 한 분의 생활 습관과 건강 상태를 살피며 가족처럼
              돌보는 노인전문요양시설입니다. 처음 상담부터 입소까지 편하게 안내해 드립니다.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.25} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/admission"
              className="bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              입소 상담 안내
            </Link>
            <Link href="/about" className="text-sm text-text-muted underline underline-offset-4 hover:text-text">
              시설 소개 보기
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35} className="mt-10 border border-line-strong bg-surface p-5">
            <p className="text-xs tracking-[0.1em] text-text-faint">전화 상담</p>
            <p className="mt-2 font-display text-2xl text-accent-strong">{SITE_CONFIG.contact.phone}</p>
            <p className="mt-1 text-sm text-text-muted">{SITE_CONFIG.contact.hours}</p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2} className="order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1758686254165-b92ad6eb2289?auto=format&fit=crop&w=1400&q=80"
              alt="볕이 드는 거실에서 담소를 나누는 어르신들"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
