import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "문의",
  description: `${SITE_CONFIG.name}에 입소 상담, 시설 견학 등을 문의하세요.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="문의" title="편하게 말씀해주세요" desc="입소 상담, 시설 견학 등 무엇이든 남겨주세요." />

      <section className="border-b border-line bg-bg py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.14em] text-accent-strong">직접 연락</p>
            <div className="mt-5 space-y-4 text-text-muted">
              <p>{SITE_CONFIG.addressFull}</p>
              <p className="font-display text-xl text-accent-strong">{SITE_CONFIG.contact.phone}</p>
              <p>{SITE_CONFIG.contact.email}</p>
              <p className="text-sm text-text-faint">{SITE_CONFIG.contact.hours}</p>
            </div>

            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1766524555239-245d78f3b3a2?auto=format&fit=crop&w=1200&q=80"
                alt="정원 산책로를 걷는 어르신 부부"
                fill
                sizes="(max-width: 767px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <a
              href={SITE_CONFIG.naverMapUrl}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-1.5 bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              네이버 지도로 길찾기 <span aria-hidden>→</span>
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
