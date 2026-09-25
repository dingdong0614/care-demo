import Link from "next/link";
import StockImage from "@/components/StockImage";
import { RevealHeading } from "@/components/Reveal";
import type { Photo } from "@/data/photos";

/** 서브페이지 머리: 사진 띠 위에 제목. 사진이 없으면 린넨 배경. */
export default function PageHero({
  crumb,
  title,
  desc,
  photo,
}: {
  crumb: string;
  title: string;
  desc: string;
  photo?: Photo;
}) {
  const onPhoto = Boolean(photo);
  return (
    <section className={`relative isolate overflow-hidden ${onPhoto ? "bg-forest" : "border-b border-line bg-bg-alt"}`}>
      {photo && (
        <>
          <StockImage photo={photo} sizes="100vw" priority width={2000} />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,26,18,0.2),rgba(20,26,18,0.78))]" />
        </>
      )}
      <div className={`wrap relative flex flex-col justify-end ${onPhoto ? "min-h-[46vh] pt-24 pb-12 md:min-h-[52vh] md:pb-16" : "py-12 md:py-20"}`}>
        <nav aria-label="현재 위치" className={`text-[16px] ${onPhoto ? "text-[#eef0e8]" : "text-text-muted"}`}>
          <Link href="/" className="underline-offset-4 hover:underline">
            홈
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <RevealHeading
          as="h1"
          text={title}
          className={`mt-3 max-w-[16em] text-[34px] leading-[1.28] md:text-[50px] ${onPhoto ? "!text-white" : ""}`}
        />
        <p className={`mt-4 max-w-[34em] text-[19px] ${onPhoto ? "text-[#eef0e8]" : "text-text-muted"}`}>{desc}</p>
      </div>
    </section>
  );
}
