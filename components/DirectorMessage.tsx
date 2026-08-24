import Image from "next/image";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export default function DirectorMessage() {
  return (
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
          <p className="mt-4 font-display text-2xl leading-relaxed md:text-[1.7rem]">
            &ldquo;제 부모님을 모신다는 마음으로, 오늘도 어르신 곁을 지킵니다.&rdquo;
          </p>
          <p className="mt-6 max-w-lg text-text-muted">
            {SITE_CONFIG.name}은 {SITE_CONFIG.founded} 문을 연 이후 큰 사고 없이 어르신들의 노후를
            지켜왔습니다. 시설의 규모보다 한 분 한 분의 컨디션과 취향을 기억하는 돌봄을 우선으로
            생각합니다. 궁금한 점은 언제든 전화로 편하게 물어봐 주세요.
          </p>
          <p className="mt-6 font-display text-lg">{SITE_CONFIG.directorName}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
