import { ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

/**
 * 장기요양기관 평가 결과 안내. 등급은 공단 공개 결과를 그대로 적는 자리라 데모에서는 비워 둡니다.
 * site.ts 의 grade 에 실제 결과를 넣으면 그 값이 크게 표시됩니다.
 */
export default function GradeNotice() {
  return (
    <section className="bg-forest py-16 text-cream md:py-20">
      <RevealOnScroll className="wrap grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
        <div className="md:border-r md:border-white/20 md:pr-16">
          <p className="text-[17px] text-[#cfe0d2]">장기요양기관 평가 결과</p>
          <p className="mt-2 font-display text-[38px] leading-tight font-semibold text-white md:text-[48px]">
            {SITE_CONFIG.grade || "등급 게시 자리"}
          </p>
        </div>
        <div>
          <p className="max-w-[36em] text-[18px] text-[#e4e9e2]">
            국민건강보험공단은 장기요양기관을 정기적으로 평가하고 그 결과를 공개합니다. 이 자리에는 시설이 받은
            결과를 그대로 적습니다.
            {!SITE_CONFIG.grade && " (데모 사이트라 비워 두었습니다.)"}
          </p>
          <a
            href="https://www.longtermcare.or.kr"
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex min-h-[48px] items-center gap-2 text-[18px] font-semibold text-white underline underline-offset-4"
          >
            노인장기요양보험 누리집에서 직접 확인 <ExternalLink aria-hidden size={18} />
            <span className="sr-only">(새 창)</span>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
