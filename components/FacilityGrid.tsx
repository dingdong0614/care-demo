import StockImage from "@/components/StockImage";
import { RevealOnScroll } from "@/components/Reveal";
import { FACILITIES } from "@/data/facilities";

/** 시설 공간. 크기가 다른 사진 두 줄. */
export default function FacilityGrid() {
  return (
    <section className="section bg-bg-alt">
      <div className="wrap">
        <RevealOnScroll>
          <h2 className="text-[30px] md:text-[40px]">어르신이 지내시는 곳</h2>
        </RevealOnScroll>
        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-12">
          {FACILITIES.map((f, i) => {
            const span = ["md:col-span-7", "md:col-span-5 md:mt-16", "md:col-span-5", "md:col-span-7 md:mt-10"][i % 4];
            const ratio = ["aspect-[4/3]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[4/3]"][i % 4];
            return (
              <RevealOnScroll key={f.name} delay={(i % 2) * 0.06} className={span}>
                <figure>
                  <div className={`photo relative overflow-hidden rounded-[6px] ${ratio}`}>
                    <StockImage photo={f.photo} sizes="(max-width: 767px) 100vw, 55vw" width={1200} />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className="text-[23px]">{f.name}</h3>
                    <p className="mt-1 max-w-[30em] text-text-muted">{f.desc}</p>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
