import Link from "next/link";
import { Phone } from "lucide-react";
import StockImage from "@/components/StockImage";
import { PHOTOS, type Photo } from "@/data/photos";
import { SITE_CONFIG, telHref } from "@/data/site";

/** 페이지 마지막: 사진 반, 전화 반. */
export default function CallBand({
  title = "직접 와서 보셔도 됩니다",
  desc = "오시기 전에 전화 한 통 주시면 둘러보실 시간을 맞춰 드립니다. 입소를 정하지 않으셔도 괜찮습니다.",
  photo = PHOTOS.smileRed,
}: {
  title?: string;
  desc?: string;
  photo?: Photo;
}) {
  return (
    <section className="grid bg-accent-soft md:grid-cols-2">
      <div className="photo relative min-h-[300px] md:min-h-[520px]">
        <StockImage photo={photo} sizes="(max-width: 767px) 100vw, 50vw" width={1200} />
      </div>
      <div className="flex flex-col justify-center px-5 py-14 md:px-16 md:py-20">
        <h2 className="text-[30px] md:text-[42px]">{title}</h2>
        <p className="mt-4 max-w-[28em] text-text-muted">{desc}</p>
        <a href={telHref} className="mt-8 inline-flex items-center gap-3 font-display text-[34px] font-bold text-accent md:text-[44px]">
          <Phone aria-hidden size={30} /> {SITE_CONFIG.contact.phone}
        </a>
        <p className="mt-1 text-[16px] text-text-muted">{SITE_CONFIG.contact.hours}</p>
        <Link href="/contact#form" className="btn btn-primary mt-8 self-start">
          방문 날짜 남기기
        </Link>
      </div>
    </section>
  );
}
