import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@fontsource/gowun-batang/400.css";
import "@fontsource/gowun-batang/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import ScrollProvider from "@/components/ScrollProvider";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ondam-care.kr"),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `${SITE_CONFIG.addressShort}. ${SITE_CONFIG.founded} 개원, 정원 ${SITE_CONFIG.capacity}${
    SITE_CONFIG.grade ? `, ${SITE_CONFIG.grade}` : ""
  }. 어르신과 가족 모두가 편안한 노인전문요양시설입니다.`,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_CONFIG.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-on-accent"
        >
          본문 바로가기
        </a>
        <ScrollProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileActionBar />
        </ScrollProvider>
      </body>
    </html>
  );
}
