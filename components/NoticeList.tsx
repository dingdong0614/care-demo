import Link from "next/link";
import { RevealOnScroll } from "@/components/Reveal";
import { NOTICES } from "@/data/notices";

export default function NoticeList() {
  return (
    <section className="border-b border-line bg-bg py-16 md:py-24">
      <div className="wrap">
        <RevealOnScroll className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.14em] text-accent-strong">최근 소식</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">공지사항 및 생활 소식</h2>
          </div>
          <Link href="/news" className="text-sm font-semibold text-accent-strong hover:text-accent">
            전체 소식 보기 →
          </Link>
        </RevealOnScroll>

        <div className="mt-10 divide-y divide-line border-t border-line">
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
  );
}
