"use client";

import { motion, type Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-media";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
};

/** 헤드라인용 단어 단위 리빌 애니메이션. 로드 즉시 실행. */
export function RevealHeading({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  // "\n"으로 줄을 직접 나눌 수 있습니다 (한국어 제목의 어색한 줄바꿈 방지).
  const lines = text.split("\n").map((l) => l.trim().split(" "));
  const MotionTag = motion[Tag];

  if (reducedMotion) {
    return (
      <MotionTag className={className}>
        {lines.map((ws, li) => (
          <span key={li}>
            {ws.join(" ")}
            {li < lines.length - 1 && <br />}
          </span>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
      style={{ display: "block" }}
      aria-label={text.replace(/\n/g, " ")}
    >
      {lines.map((ws, li) => (
        <span key={li} aria-hidden>
          {ws.map((w, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "top",
                marginRight: i < ws.length - 1 ? "0.28em" : 0,
              }}
            >
              <motion.span variants={word} style={{ display: "inline-block" }}>
                {w}
              </motion.span>
            </span>
          ))}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </MotionTag>
  );
}

/** 스크롤 진입 시 페이드+슬라이드업 되는 범용 래퍼 */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 16,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.36, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
