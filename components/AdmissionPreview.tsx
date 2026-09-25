import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/Reveal";
import { STEPS } from "@/data/admission";

/** 홈용 입소 절차 요약: 번호 흐름으로 한눈에. */
export default function AdmissionPreview() {
  return (
    <section className="section bg-bg">
      <div className="wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <RevealOnScroll>
          <p className="eyebrow">입소 절차</p>
          <h2 className="h2 mt-3">처음이어도 어렵지 않게, 순서대로 안내합니다</h2>
          <p className="mt-5 text-text-muted">
            장기요양등급이 아직 없으셔도 괜찮습니다. 등급 신청 절차부터 전화로 편하게 안내해 드립니다.
          </p>
          <Link href="/admission" className="btn btn-ghost mt-8">
            필요 서류와 비용 보기 <ArrowRight aria-hidden size={20} />
          </Link>
        </RevealOnScroll>

        <ol className="relative grid gap-4">
          {STEPS.map((s, i) => (
            <li key={s.step}>
              <RevealOnScroll delay={i * 0.05} className="card flex gap-5 p-6 md:p-7">
                <span
                  aria-hidden
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-accent font-display text-[24px] font-bold text-accent"
                >
                  {s.step}
                </span>
                <div>
                  <h3 className="text-[22px]">
                    <span className="sr-only">{s.step}단계 </span>
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-text-muted">{s.desc}</p>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
