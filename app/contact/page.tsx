import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import StockImage from "@/components/StockImage";
import { PHOTOS } from "@/data/photos";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG, telHref } from "@/data/site";

export const metadata: Metadata = {
  title: "문의",
  description: `${SITE_CONFIG.name}에 입소 상담, 시설 견학 등을 문의하세요.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="상담 예약"
        title="편하게 말씀해 주세요"
        desc="입소 상담, 시설 견학 예약 등 무엇이든 남겨 주세요. 급하시면 전화가 가장 빠릅니다."
      />

      <section className="section bg-bg">
        <div className="wrap grid gap-10 md:grid-cols-[1fr_1.25fr] md:gap-14">
          <RevealOnScroll>
            <a
              href={telHref}
              className="flex items-center gap-5 rounded-[20px] bg-accent p-6 text-on-accent transition-colors duration-200 hover:bg-accent-strong md:p-7"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-on-accent/15">
                <Phone aria-hidden size={26} />
              </span>
              <span>
                <span className="block text-[17px] text-on-accent/90">전화 상담 24시간</span>
                <span className="block font-display text-[30px] font-bold leading-tight">{SITE_CONFIG.contact.phone}</span>
              </span>
            </a>

            <ul className="mt-6 space-y-4 text-[18px]">
              <li className="flex gap-3">
                <Clock aria-hidden size={22} className="mt-1 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold">방문 상담</span>
                  <span className="text-text-muted">{SITE_CONFIG.contact.visitHours}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden size={22} className="mt-1 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold">{SITE_CONFIG.addressFull}</span>
                  <span className="text-text-muted">{SITE_CONFIG.addressShort}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden size={22} className="mt-1 shrink-0 text-accent" />
                <span>{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>

            <div className="photo mt-8 hidden aspect-[4/3] w-full rounded-[6px] md:block">
              <StockImage photo={PHOTOS.tea} sizes="40vw" width={900} />
            </div>
            <a href={SITE_CONFIG.naverMapUrl} target="_blank" rel="noopener" className="btn btn-ghost mt-5 w-full">
              네이버 지도로 길찾기<span className="sr-only"> (새 창)</span>
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div id="form" className="scroll-mt-28">
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
