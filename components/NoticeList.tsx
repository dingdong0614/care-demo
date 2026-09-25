import Link from "next/link";
import { QrCode } from "lucide-react";
import { RevealOnScroll } from "@/components/Reveal";
import { NOTICES } from "@/data/notices";

export function NoticeItems({ limit }: { limit?: number }) {
  const items = limit ? NOTICES.slice(0, limit) : NOTICES;
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((n) => (
        <li key={n.title} className="grid gap-1 py-6 md:grid-cols-[130px_1fr] md:gap-8">
          <time dateTime={n.date.replace(/\./g, "-")} className="text-[17px] text-text-faint md:pt-0.5">
            {n.date}
          </time>
          <div>
            <h3 className="font-body text-[21px] font-semibold tracking-normal">{n.title}</h3>
            <p className="mt-1 text-text-muted">{n.excerpt}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** 재원 가족용 공지. 면회실 QR과 연결된다는 점을 함께 알립니다. */
export default function NoticeList() {
  return (
    <section className="section border-t border-line bg-bg">
      <div className="wrap">
        <RevealOnScroll className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h2 className="text-[30px] md:text-[40px]">면회·식단 공지</h2>
          <Link href="/news" className="text-link inline-flex min-h-[48px] items-center text-[18px]">
            지난 공지 모두 보기
          </Link>
        </RevealOnScroll>
        <RevealOnScroll delay={0.05} className="mt-8">
          <NoticeItems />
        </RevealOnScroll>
        <p className="mt-6 flex items-start gap-3 text-[17px] text-text-muted">
          <QrCode aria-hidden size={22} className="mt-0.5 shrink-0 text-accent" />
          현관과 면회실에 붙은 QR을 휴대폰으로 찍으면 이 공지가 바로 열립니다.
        </p>
      </div>
    </section>
  );
}
