"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE_CONFIG, telHref } from "@/data/site";

const NAV_LINKS = [
  { href: "/about", label: "시설소개" },
  { href: "/admission", label: "입소·비용 안내" },
  { href: "/news", label: "소식" },
  { href: "/contact", label: "상담 예약" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b bg-bg/95 transition-[border-color,box-shadow] duration-200 md:bg-bg/90 md:backdrop-blur-md ${
        scrolled ? "border-line shadow-[0_4px_20px_rgba(52,44,30,0.06)]" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${SITE_CONFIG.name} 홈`}>
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-full bg-accent text-[17px] font-semibold text-on-accent"
          >
            온
          </span>
          <span className="text-[21px] font-semibold tracking-[-0.025em]">{SITE_CONFIG.name}</span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-4 py-2.5 text-[17px] font-medium underline-offset-[10px] transition-colors ${
                  isActive ? "text-accent-strong underline decoration-2" : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref} className="btn btn-primary hidden !min-h-[48px] !px-5 !text-[17px] md:inline-flex">
            <Phone aria-hidden size={18} strokeWidth={2.2} />
            <span>
              <span className="sr-only">전화 상담 </span>
              {SITE_CONFIG.contact.phone}
            </span>
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobileNav"
            onClick={() => setOpen((v) => !v)}
            className="grid h-12 w-12 place-items-center rounded-full border border-line-strong bg-surface lg:hidden"
          >
            <span className="sr-only">{open ? "메뉴 닫기" : "메뉴 열기"}</span>
            {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobileNav"
        aria-label="모바일 메뉴"
        hidden={!open}
        className="border-t border-line bg-bg lg:hidden"
      >
        <div className="wrap flex flex-col py-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`flex min-h-[56px] items-center border-b border-line text-[19px] font-medium ${
                pathname === link.href ? "text-accent-strong" : "text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={telHref} className="btn btn-primary mt-4 w-full">
            <Phone aria-hidden size={20} /> {SITE_CONFIG.contact.phone} 전화하기
          </a>
        </div>
      </nav>
    </header>
  );
}
