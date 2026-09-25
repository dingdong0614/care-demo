import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { telHref } from "@/data/site";

/** 모바일 하단 고정 행동 바: 전화와 상담 예약을 어느 화면에서든 한 번에. */
export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-bg px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] md:hidden"
      role="region"
      aria-label="빠른 상담"
    >
      <div className="grid grid-cols-2 gap-2">
        <a href={telHref} className="btn btn-primary !min-h-[52px] !px-3">
          <Phone aria-hidden size={20} /> 전화 상담
        </a>
        <Link href="/contact#form" className="btn btn-ghost !min-h-[52px] !px-3">
          <CalendarCheck aria-hidden size={20} /> 방문 예약
        </Link>
      </div>
    </div>
  );
}
