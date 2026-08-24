import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import TrustStrip from "@/components/TrustStrip";
import QuickInfoCards from "@/components/QuickInfoCards";
import DirectorMessage from "@/components/DirectorMessage";
import FacilityGrid from "@/components/FacilityGrid";
import NoticeList from "@/components/NoticeList";
import { RevealOnScroll } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <QuickInfoCards />
      <DirectorMessage />
      <FacilityGrid />
      <NoticeList />

      <section className="py-16 md:py-24">
        <RevealOnScroll className="wrap flex flex-col items-start gap-5 border border-line-strong bg-surface p-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl">궁금한 점이 있으신가요?</p>
            <p className="mt-2 text-sm text-text-muted">전화나 문의 폼으로 편하게 남겨주시면 상담팀이 직접 답변드립니다.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            문의하기
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
