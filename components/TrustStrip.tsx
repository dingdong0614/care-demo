import { RevealOnScroll } from "@/components/Reveal";
import { SITE_CONFIG } from "@/data/site";

const STATS = [
  { label: "개원", value: SITE_CONFIG.founded },
  { label: "평가등급", value: SITE_CONFIG.grade },
  { label: "정원", value: SITE_CONFIG.capacity },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-bg-alt py-8">
      <RevealOnScroll className="wrap flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
        {STATS.map((s) => (
          <p key={s.label} className="text-sm text-text-muted">
            <span className="text-text-faint">{s.label}</span>{" "}
            <span className="font-display text-base text-text">{s.value}</span>
          </p>
        ))}
      </RevealOnScroll>
    </section>
  );
}
