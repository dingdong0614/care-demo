import StockImage from "@/components/StockImage";
import { RevealOnScroll } from "@/components/Reveal";
import { DAILY } from "@/data/daily";

/** 하루 일과 타임라인. 시간 순서대로 사진과 함께 내려갑니다. */
export default function DayTimeline() {
  return (
    <section id="day" className="scroll-mt-20 bg-bg-alt py-[var(--section-y)]">
      <div className="wrap">
        <RevealOnScroll className="md:pl-[calc(96px+2rem)]">
          <h2 className="text-[32px] md:text-[44px]">여기서의 하루</h2>
          <p className="mt-3 max-w-[32em] text-text-muted">
            평일 기준입니다. 계절과 어르신 컨디션에 따라 시간은 조금씩 바뀝니다.
          </p>
        </RevealOnScroll>

        <ol className="relative mt-12 md:mt-16">
          <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-line-strong md:left-[calc(96px+1rem)]" />
          {DAILY.map((d, i) => (
            <li key={d.time} className="relative pb-14 pl-9 last:pb-0 md:grid md:grid-cols-[96px_1fr] md:gap-8 md:pl-0">
              <span
                aria-hidden
                className="absolute top-[9px] left-0 h-[15px] w-[15px] rounded-full border-[3px] border-bg-alt bg-accent md:left-[calc(96px+1rem-7px)]"
              />
              <p className="font-display text-[26px] font-bold text-accent md:pt-0 md:text-right md:text-[28px]">
                <time>{d.time}</time>
              </p>
              <RevealOnScroll
                className={`mt-2 grid gap-5 md:mt-0 md:items-center md:gap-10 md:pl-8 ${
                  i % 2 ? "md:grid-cols-[0.8fr_1fr]" : "md:grid-cols-[1fr_0.8fr]"
                }`}
              >
                <div className={i % 2 ? "md:order-2" : ""}>
                  <h3 className="text-[24px] md:text-[28px]">{d.title}</h3>
                  <p className="mt-2 max-w-[28em] text-text-muted">{d.text}</p>
                </div>
                <div
                  className={`photo relative overflow-hidden rounded-[6px] ${
                    i % 3 === 1 ? "aspect-[4/3]" : "aspect-[3/2]"
                  } ${i % 2 ? "md:order-1" : ""}`}
                >
                  <StockImage photo={d.photo} sizes="(max-width: 767px) 100vw, 40vw" width={1100} />
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
