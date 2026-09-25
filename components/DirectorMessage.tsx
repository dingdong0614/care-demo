import Link from "next/link";
import StockImage from "@/components/StockImage";
import { RevealOnScroll } from "@/components/Reveal";
import { PHOTOS } from "@/data/photos";
import { SITE_CONFIG } from "@/data/site";

export default function DirectorMessage() {
  return (
    <section className="section bg-bg">
      <div className="wrap grid gap-10 md:grid-cols-[0.55fr_1fr] md:gap-16">
        <RevealOnScroll className="order-2 md:order-1">
          <div className="photo relative aspect-[3/4] max-w-[360px] overflow-hidden rounded-[6px]">
            <StockImage photo={PHOTOS.director} sizes="(max-width: 767px) 80vw, 30vw" width={800} />
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.06} className="order-1 md:order-2 md:pt-10">
          <blockquote>
            <p className="text-[28px] leading-[1.45] font-semibold tracking-[-0.025em] md:text-[36px]">
              &ldquo;제 부모님을 모신다는 마음으로, 오늘도 어르신 곁을 지킵니다.&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 max-w-[32em] text-text-muted">
            {SITE_CONFIG.founded} 문을 연 뒤로 큰 사고 없이 지내 왔습니다. 시설 규모보다 한 분 한 분의 컨디션과 취향을
            기억하는 걸 먼저 생각합니다.
          </p>
          <p className="mt-6 text-[19px]">
            <span className="font-semibold">{SITE_CONFIG.directorName}</span>
            <Link href="/about" className="text-link ml-5 inline-flex min-h-[48px] items-center">
              인사말 전문
            </Link>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
