import Link from "next/link";
import { SITE_CONFIG, telHref } from "@/data/site";

const LINKS = [
  { href: "/about", label: "시설소개" },
  { href: "/admission", label: "입소·비용 안내" },
  { href: "/news", label: "소식" },
  { href: "/contact", label: "상담 예약" },
  { href: "/privacy", label: "개인정보처리방침" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:py-16">
        <div>
          <p className="text-[22px] font-semibold tracking-[-0.02em]">{SITE_CONFIG.name}</p>
          <p className="mt-2 text-[17px] text-text-muted">{SITE_CONFIG.slogan}</p>
          <a href={telHref} className="mt-5 inline-block font-display text-[28px] font-bold text-accent">
            {SITE_CONFIG.contact.phone}
          </a>
          <p className="mt-1 text-[16px] text-text-muted">{SITE_CONFIG.contact.hours}</p>
        </div>

        <nav aria-label="사이트 메뉴" className="flex flex-col text-[17px]">
          <p className="mb-2 text-[15px] font-semibold text-text-faint">바로가기</p>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="flex min-h-[44px] items-center text-text-muted hover:text-text">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-[16px] text-text-muted">
          <p className="mb-1 text-[15px] font-semibold text-text-faint">시설 정보</p>
          <p>{SITE_CONFIG.addressFull}</p>
          <p>
            {SITE_CONFIG.founded} 개원 · 정원 {SITE_CONFIG.capacity}
            {SITE_CONFIG.grade ? ` · ${SITE_CONFIG.grade}` : ""}
          </p>
          <p>
            대표 {SITE_CONFIG.operator.representative} · 사업자등록번호 {SITE_CONFIG.operator.bizNumber}
          </p>
          <p>
            TEL {SITE_CONFIG.contact.phone} · FAX {SITE_CONFIG.contact.fax}
          </p>
          <p>{SITE_CONFIG.contact.email}</p>
          <a
            href={SITE_CONFIG.naverMapUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-[44px] items-center font-semibold text-accent underline underline-offset-4"
          >
            네이버 지도로 보기<span className="sr-only"> (새 창)</span>
          </a>
        </div>
      </div>

      <div className="wrap flex flex-col gap-2 border-t border-line py-6 text-[15px] text-text-faint md:flex-row md:justify-between">
        <p>
          &copy; {year} {SITE_CONFIG.name}. All rights reserved. 사진: Unsplash
        </p>
        {SITE_CONFIG.isDemo && (
          <p>
            영업용 데모 사이트입니다. 시설명·연락처·주소 등 표시된 정보는 모두 예시입니다. 제작 doion
          </p>
        )}
      </div>
    </footer>
  );
}
