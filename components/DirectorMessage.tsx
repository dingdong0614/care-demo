import Image from "next/image";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export default function DirectorMessage() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1774094135149-bbeeb1767bfa?auto=format&fit=crop&w=1600&q=80"
          alt="환하게 웃는 온담요양원 어르신"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2015]/88 via-[#1c2015]/55 to-transparent" />
      </div>

      <div className="wrap relative">
        <RevealOnScroll className="max-w-xl">
          <p className="text-xs tracking-[0.14em] text-cream/70">원장 인사말</p>
          <p className="mt-5 font-display text-[1.7rem] leading-relaxed text-cream md:text-[2.2rem]">
            &ldquo;제 부모님을 모신다는 마음으로,
            <br className="hidden md:block" /> 오늘도 어르신 곁을 지킵니다.&rdquo;
          </p>
          <p className="mt-6 max-w-md text-cream/75">
            {SITE_CONFIG.name}은 {SITE_CONFIG.founded} 문을 연 이후 큰 사고 없이 어르신들의 노후를
            지켜왔습니다. 시설의 규모보다 한 분 한 분의 컨디션과 취향을 기억하는 돌봄을 우선으로
            생각합니다. 궁금한 점은 언제든 전화로 편하게 물어봐 주세요.
          </p>
          <div className="mt-8 h-px w-14 bg-cream/30" />
          <p className="mt-6 font-display text-lg text-cream">{SITE_CONFIG.directorName}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
