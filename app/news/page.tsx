import type { Metadata } from "next";
import { QrCode } from "lucide-react";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import StockImage from "@/components/StockImage";
import { NoticeItems } from "@/components/NoticeList";
import { RevealOnScroll } from "@/components/Reveal";
import { GALLERY } from "@/data/gallery";
import { PHOTOS } from "@/data/photos";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "소식",
  description: `${SITE_CONFIG.name} 공지사항과 생활 사진을 확인하세요.`,
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        crumb="소식"
        title="온담요양원의 하루"
        desc="면회 안내, 주간 식단표, 요즘 찍은 사진을 올립니다."
        photo={PHOTOS.couple}
      />

      <section className="section bg-bg" aria-labelledby="notice-title">
        <div className="wrap max-w-[960px]">
          <h2 id="notice-title" className="text-[30px] md:text-[40px]">
            공지
          </h2>
          <p className="mt-3 flex items-start gap-3 text-[17px] text-text-muted">
            <QrCode aria-hidden size={22} className="mt-0.5 shrink-0 text-accent" />
            현관·면회실 QR로 들어오셨다면 여기가 맞습니다.
          </p>
          <RevealOnScroll delay={0.04} className="mt-8">
            <NoticeItems />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section bg-bg-alt" aria-labelledby="gallery-title">
        <div className="wrap">
          <h2 id="gallery-title" className="text-[30px] md:text-[40px]">
            요즘 찍은 사진
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {GALLERY.map((g, i) => (
              <RevealOnScroll
                key={g.caption}
                delay={(i % 2) * 0.05}
                className={["md:col-span-8", "md:col-span-4 md:mt-20", "md:col-span-5", "md:col-span-7"][i % 4]}
              >
                <figure>
                  <div className={`photo relative overflow-hidden rounded-[6px] ${i === 1 || i === 2 ? "aspect-[4/5]" : "aspect-[3/2]"}`}>
                    <StockImage photo={g.photo} sizes="(max-width: 767px) 100vw, 60vw" width={1200} />
                  </div>
                  <figcaption className="mt-3 text-[17px] text-text-muted">{g.caption}</figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}
