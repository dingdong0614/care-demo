import Link from "next/link";
import { Phone } from "lucide-react";
import StockImage from "@/components/StockImage";
import { PHOTOS } from "@/data/photos";
import { SITE_CONFIG, telHref } from "@/data/site";

/** 풀블리드 사진 히어로. 사진 위에 한 줄, 아래쪽에 전화. */
export default function HomeHero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden bg-forest md:min-h-[86vh]">
      <StockImage photo={PHOTOS.canolaCouple} sizes="100vw" priority width={2000} />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,26,18,0.15)_0%,rgba(20,26,18,0.25)_40%,rgba(20,26,18,0.82)_100%)]"
      />
      <div className="wrap relative flex min-h-[78svh] flex-col justify-end pb-12 md:min-h-[86vh] md:pb-20">
        <p className="text-[17px] text-[#eef0e8]">
          {SITE_CONFIG.addressShort.split(" · ")[0]} · {SITE_CONFIG.founded} 문 열었습니다
        </p>
        <h1 className="mt-3 max-w-[15em] text-[36px] leading-[1.3] text-white md:text-[58px] md:leading-[1.22]">
          어머니가 여기서 지내시면 어떨지,
          <br className="hidden sm:block" /> 먼저 보여 드릴게요.
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={telHref} className="btn btn-light !min-h-[58px] !px-6 !text-[19px]">
            <Phone aria-hidden size={20} /> {SITE_CONFIG.contact.phone}
          </a>
          <Link href="#day" className="inline-flex min-h-[48px] items-center text-[18px] text-white underline underline-offset-[6px]">
            여기서의 하루부터 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
