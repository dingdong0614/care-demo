import type { Metadata } from "next";
import { Check, ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import StockImage from "@/components/StockImage";
import { RevealOnScroll } from "@/components/Reveal";
import { COSTS, COST_NOTE, DOCUMENTS, STEPS } from "@/data/admission";
import { PHOTOS } from "@/data/photos";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "입소안내",
  description: `${SITE_CONFIG.name} 입소 대상, 절차, 비용, 필요서류를 안내합니다.`,
};

/** 보호자가 전화로 가장 자주 묻는 질문을 먼저 답해 둡니다. 사실만 적고 모르는 값은 상담으로 넘깁니다. */
const FAQ = [
  {
    q: "장기요양등급이 아직 없으면 어떻게 하나요?",
    a: "등급은 국민건강보험공단에 장기요양인정을 신청해 받습니다. 신청 방법과 준비할 것을 전화로 편하게 안내해 드립니다.",
  },
  {
    q: "3~5등급도 입소할 수 있나요?",
    a: "시설 입소 가능 여부는 등급과 어르신의 상황에 따라 달라, 상담을 통해 개별 확인해 드립니다.",
  },
  {
    q: "평가등급이 어떻게 되세요?",
    a: SITE_CONFIG.grade
      ? `국민건강보험공단 장기요양기관 평가 결과 ${SITE_CONFIG.grade}입니다. 노인장기요양보험 누리집(longtermcare.or.kr)에서도 확인하실 수 있습니다.`
      : "국민건강보험공단이 공개한 평가 결과를 이 자리에 그대로 적습니다(데모 사이트라 비워 두었습니다). 노인장기요양보험 누리집(longtermcare.or.kr)에서도 직접 확인하실 수 있습니다.",
  },
  {
    q: "면회는 언제 할 수 있나요?",
    a: "면회 시간과 예약 방법은 소식 게시판 공지로 올려 둡니다. 명절처럼 바뀌는 때에는 따로 공지합니다.",
  },
  {
    q: "이번 주 식단은 어디서 보나요?",
    a: "주간 식단표를 매주 소식 게시판에 올립니다.",
  },
  {
    q: "정확한 월 비용은 얼마인가요?",
    a: COST_NOTE,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function AdmissionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        crumb="입소안내"
        title="상담부터 입소까지, 차근차근"
        desc="장기요양등급 확인부터 서류 준비까지, 처음이셔도 됩니다."
        photo={PHOTOS.tileCouple}
      />

      <section className="section bg-bg" aria-labelledby="steps-title">
        <div className="wrap grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <RevealOnScroll>
            <h2 id="steps-title" className="text-[30px] md:text-[40px]">
              입소는 네 번에 나눠 진행합니다
            </h2>
            <div className="photo relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[6px] md:block">
              <StockImage photo={PHOTOS.redVest} sizes="40vw" width={1000} />
            </div>
          </RevealOnScroll>
          <ol className="border-t border-line">
            {STEPS.map((s) => (
              <li key={s.step} className="border-b border-line py-7">
                <RevealOnScroll className="grid grid-cols-[56px_1fr] gap-4">
                  <span aria-hidden className="font-display text-[34px] leading-none font-bold text-accent">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[23px]">
                      <span className="sr-only">{s.step}단계 </span>
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-text-muted">{s.desc}</p>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="cost" className="section scroll-mt-24 bg-bg-alt" aria-labelledby="cost-title">
        <div className="wrap grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <RevealOnScroll>
            <h2 id="cost-title" className="text-[30px] md:text-[40px]">
              등급별 본인부담금
            </h2>
            <table className="mt-8 w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-text text-[16px] text-text-muted">
                  <th scope="col" className="py-3 font-semibold">등급</th>
                  <th scope="col" className="py-3 font-semibold">내용</th>
                  <th scope="col" className="py-3 text-right font-semibold">본인부담</th>
                </tr>
              </thead>
              <tbody>
                {COSTS.map((c) => (
                  <tr key={c.grade} className="border-b border-line align-top">
                    <th scope="row" className="py-5 pr-4 text-[18px] font-semibold whitespace-nowrap">
                      {c.grade.replace("장기요양 ", "")}
                    </th>
                    <td className="py-5 pr-4 text-[17px] text-text-muted">{c.desc}</td>
                    <td className="py-5 text-right font-display text-[22px] font-bold whitespace-nowrap text-accent">{c.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 text-[17px] text-text-muted">{COST_NOTE}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.06}>
            <h2 className="text-[30px] md:text-[40px]">입소 날 챙겨 오실 서류</h2>
            <ul className="mt-8 space-y-4">
              {DOCUMENTS.map((d) => (
                <li key={d} className="flex gap-4 text-[18px]">
                  <Check aria-hidden size={24} strokeWidth={2.5} className="mt-0.5 shrink-0 text-accent" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section bg-bg" aria-labelledby="faq-title">
        <div className="wrap max-w-[860px]">
          <RevealOnScroll>
            <h2 id="faq-title" className="text-[30px] md:text-[40px]">
              전화로 제일 많이 물으시는 것
            </h2>
          </RevealOnScroll>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-2">
                <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 text-[20px] font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown aria-hidden size={24} className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallBand
        title="등급이 아직 없으셔도 전화 주세요"
        desc="등급 신청 절차부터 전화로 안내해 드립니다. 어르신 상황을 들어 보고 방법을 같이 찾겠습니다."
      />
    </>
  );
}
