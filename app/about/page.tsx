import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FacilityGrid from "@/components/FacilityGrid";
import GradeNotice from "@/components/GradeNotice";
import CallBand from "@/components/CallBand";
import StockImage from "@/components/StockImage";
import { RevealOnScroll } from "@/components/Reveal";
import { PHOTOS } from "@/data/photos";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "시설소개",
  description: `${SITE_CONFIG.name} 원장 인사말, 걸어온 길, 시설 공간을 소개합니다.`,
};

/** 연혁 (영업용 데모 더미). 평가등급처럼 공식 결과는 실제 값이 있을 때만 넣습니다. */
const TIMELINE = [
  { year: "2011", event: "용인시 수지구에 온담요양원 개원" },
  { year: "2015", event: "정원 49인 규모로 증축, 프로그램실 신설" },
  { year: "2021", event: "원예·인지활동 프로그램 정례화" },
  { year: "2026", event: "정원 산책로 리모델링" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="시설소개"
        title="한 분 한 분을 기억하는 요양원"
        desc={`${SITE_CONFIG.addressShort}. ${SITE_CONFIG.founded} 개원, 정원 ${SITE_CONFIG.capacity}.`}
        photo={PHOTOS.flowerBench}
      />

      <section className="section bg-bg">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_0.7fr] md:gap-20">
          <RevealOnScroll>
            <h2 className="text-[30px] md:text-[40px]">원장 인사말</h2>
            <div className="mt-6 max-w-[36em] space-y-5 text-[19px] leading-[1.85]">
              <p>
                안녕하세요, {SITE_CONFIG.name} {SITE_CONFIG.directorName}입니다. 저희는 큰 시설이 아닙니다. 하지만 작다는
                것은 어르신 한 분 한 분의 컨디션과 취향을 기억할 수 있다는 뜻이기도 합니다.
              </p>
              <p>
                거동이 불편해지신 것도, 낯선 곳에 모신다는 죄송함도 가족들에게는 쉽지 않은 결정입니다. 저희는 그 마음을
                알기에 첫 상담부터 입소 이후까지 있는 그대로 솔직하게 안내해 드립니다.
              </p>
              <p>언제든 편하게 방문하시어 시설을 직접 둘러봐 주세요.</p>
            </div>
            <p className="mt-8 font-display text-[22px] font-bold">{SITE_CONFIG.directorName}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06}>
            <div className="photo relative aspect-[3/4] overflow-hidden rounded-[6px]">
              <StockImage photo={PHOTOS.director} sizes="(max-width: 767px) 100vw, 35vw" width={900} />
            </div>
            <h2 className="mt-12 text-[24px]">걸어온 길</h2>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {TIMELINE.map((t) => (
                <div key={t.year} className="grid grid-cols-[72px_1fr] gap-3 py-4">
                  <dt className="font-display text-[20px] font-bold text-accent">{t.year}</dt>
                  <dd className="m-0 text-[18px]">{t.event}</dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </div>
      </section>

      <FacilityGrid />
      <GradeNotice />
      <CallBand photo={PHOTOS.couple} />
    </>
  );
}
