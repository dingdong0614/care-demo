import Link from "next/link";
import { RevealOnScroll } from "@/components/Reveal";
import { COSTS, COST_NOTE, STEPS } from "@/data/admission";

/** 비용과 입소 순서. 카드 대신 표와 문장으로. */
export default function CostAndSteps() {
  return (
    <section className="section bg-bg">
      <div className="wrap grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
        <RevealOnScroll>
          <h2 className="text-[30px] md:text-[40px]">비용은 등급에 따라 정해집니다</h2>
          <p className="mt-4 text-text-muted">
            장기요양보험이 대부분을 내고, 가족은 본인부담금만 내십니다.
          </p>
          <table className="mt-8 w-full border-collapse text-left">
            <caption className="sr-only">장기요양 등급별 본인부담금</caption>
            <thead>
              <tr className="border-b-2 border-text text-[16px] text-text-muted">
                <th scope="col" className="py-3 font-semibold">등급</th>
                <th scope="col" className="py-3 text-right font-semibold">본인부담</th>
              </tr>
            </thead>
            <tbody>
              {COSTS.map((c) => (
                <tr key={c.grade} className="border-b border-line">
                  <th scope="row" className="py-5 pr-4 align-top text-[19px] font-semibold">
                    {c.grade}
                    <span className="mt-1 block text-[16px] font-normal text-text-muted">
                      {c.share === "개별 상담" ? c.desc : "기초생활수급자·차상위는 경감이 따로 적용됩니다"}
                    </span>
                  </th>
                  <td className="py-5 text-right align-top font-display text-[26px] font-bold whitespace-nowrap text-accent">
                    {c.share}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-[16px] text-text-muted">{COST_NOTE}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.06} className="md:pt-2">
          <h2 className="text-[30px] md:text-[40px]">입소까지는 이 순서입니다</h2>
          <ol className="mt-8 space-y-6">
            {STEPS.map((s) => (
              <li key={s.step} className="grid grid-cols-[40px_1fr] gap-3">
                <span className="font-display text-[28px] leading-[1.2] font-bold text-accent">{s.step}</span>
                <p>
                  <strong className="text-[20px]">{s.title}.</strong>{" "}
                  <span className="text-text-muted">{s.desc}</span>
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 border-l-4 border-accent pl-5 text-[18px]">
            장기요양등급이 아직 없으셔도 됩니다. 등급 신청부터 같이 봐 드립니다.
          </p>
          <Link href="/admission" className="text-link mt-6 inline-flex min-h-[48px] items-center text-[18px]">
            필요 서류까지 자세히
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
