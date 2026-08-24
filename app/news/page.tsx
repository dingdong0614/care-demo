import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { RevealOnScroll } from "@/components/Reveal";
import { NOTICES } from "@/data/notices";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "소식",
  description: `${SITE_CONFIG.name} 공지사항과 생활 사진을 확인하세요.`,
};

const GALLERY = [
  {
    caption: "여름맞이 생신잔치",
    image:
      "https://images.unsplash.com/photo-1764173040044-9835cc696a39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "손을 맞잡고 나누는 안부",
    image:
      "https://images.unsplash.com/photo-1454875392665-2ac2c85e8d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "거실에서의 오후",
    image:
      "https://images.unsplash.com/photo-1758691031135-42c95d817486?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero crumb="소식" title="온담요양원의 하루" desc="공지사항과 어르신들의 생활 모습을 전해드립니다." />

      <section className="border-b border-line bg-bg py-16 md:py-24">
        <div className="wrap max-w-3xl">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">공지사항</p>
          </RevealOnScroll>
          <div className="mt-6 divide-y divide-line border-t border-b border-line">
            {NOTICES.map((n, i) => (
              <RevealOnScroll key={n.title} delay={i * 0.06}>
                <div className="flex flex-wrap items-center justify-between gap-3 py-5">
                  <div>
                    <p className="font-display text-lg">{n.title}</p>
                    <p className="mt-1 text-sm text-text-muted">{n.excerpt}</p>
                  </div>
                  <span className="text-sm text-text-faint">{n.date}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-24">
        <div className="wrap">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">생활 사진</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">어르신들의 소소한 순간들</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <RevealOnScroll key={g.caption} delay={i * 0.08}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={g.image}
                    alt={g.caption}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm text-text-muted">{g.caption}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
