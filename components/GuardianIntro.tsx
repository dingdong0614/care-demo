import StockImage from "@/components/StockImage";
import { RevealOnScroll } from "@/components/Reveal";
import { PHOTOS } from "@/data/photos";
import { SITE_CONFIG } from "@/data/site";

/** 보호자에게 건네는 첫 말. 전화 전에 볼 수 있게 다 올려 두었다는 약속. */
export default function GuardianIntro() {
  return (
    <section className="section bg-bg">
      <div className="wrap grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:items-end md:gap-20">
        <RevealOnScroll>
          <h2 className="max-w-[18em] text-[26px] leading-[1.5] font-medium tracking-[-0.025em] md:text-[34px]">
            요양원은 대부분 몇 군데를 비교해 보고 정하십니다. 그래서 전화 드리기 전에 보실 수 있게,{" "}
            <span className="font-semibold text-accent">사진과 하루 일과, 비용, 평가 결과</span>를 여기에 다 올려
            두었습니다.
          </h2>
          <p className="mt-8 max-w-[34em] text-text-muted">
            {SITE_CONFIG.name}은 정원 {SITE_CONFIG.capacity}의 작은 시설입니다. 궁금한 게 남으시면 그때 전화 주세요.
            전화는 24시간 받습니다.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.08} className="relative ml-auto w-[70%] md:w-full">
          <div className="photo relative aspect-[4/5] overflow-hidden rounded-[6px]">
            <StockImage photo={PHOTOS.wickerChair} sizes="(max-width: 767px) 70vw, 30vw" width={900} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
