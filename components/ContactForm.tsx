"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";

const PHONE_PATTERN = /^[0-9\-+ ]{9,14}$/;
const LIMITS = { name: 30, phone: 14, message: 1000 };
const COOLDOWN_MS = 60_000;
const IS_DEMO_KEY =
  !SITE_CONFIG.contact.web3formsAccessKey || SITE_CONFIG.contact.web3formsAccessKey.startsWith("YOUR_");

const TYPES = ["입소 상담", "시설 견학 예약", "기타 문의"] as const;

const inputCls =
  "mt-2 block w-full rounded-[12px] border-[1.5px] border-line-strong bg-surface px-4 py-3.5 text-[18px] text-text outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<{ text: string; error: boolean }>({ text: "", error: false });
  const [submitting, setSubmitting] = useState(false);
  const lastSentAt = useRef(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // 봇 방지용 숨김 필드: 값이 있으면 조용히 무시
    if (data.get("botcheck")) return;

    const name = String(data.get("name") || "").trim().slice(0, LIMITS.name);
    const phone = String(data.get("phone") || "").trim().slice(0, LIMITS.phone);
    const type = TYPES.includes(String(data.get("type")) as (typeof TYPES)[number])
      ? String(data.get("type"))
      : TYPES[0];
    const visitDate = String(data.get("visitDate") || "").trim().slice(0, 10);
    const message = String(data.get("message") || "").trim().slice(0, LIMITS.message);
    const privacyConsent = data.get("privacyConsent") === "on";

    if (!name || !phone || !message) {
      setStatus({ text: "이름, 연락처, 문의 내용을 모두 입력해 주세요.", error: true });
      return;
    }
    if (!PHONE_PATTERN.test(phone)) {
      setStatus({ text: "연락처 형식을 확인해 주세요. (예: 010-0000-0000)", error: true });
      return;
    }
    if (!privacyConsent) {
      setStatus({ text: "개인정보 수집·이용에 동의해 주세요.", error: true });
      return;
    }
    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      setStatus({ text: "방금 접수된 문의가 있습니다. 잠시 후 다시 시도해 주세요.", error: true });
      return;
    }

    if (IS_DEMO_KEY) {
      setStatus({
        text: `${name}님, 데모 사이트라 실제로 전송되지는 않았습니다. 실제 운영 시에는 이 단계에서 상담팀에 바로 전달됩니다.`,
        error: false,
      });
      form.reset();
      return;
    }

    setSubmitting(true);
    setStatus({ text: "", error: false });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE_CONFIG.contact.web3formsAccessKey,
          subject: `[${SITE_CONFIG.name} 문의] ${type} - ${name}`,
          from_name: `${SITE_CONFIG.name} 웹사이트 문의 폼`,
          name,
          phone,
          문의유형: type,
          방문희망일: visitDate || "미정",
          message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        lastSentAt.current = Date.now();
        setStatus({ text: `${name}님, 문의가 접수되었습니다. 빠르게 연락드리겠습니다.`, error: false });
        form.reset();
      } else {
        setStatus({ text: "전송에 실패했습니다. 전화나 이메일로 문의해 주세요.", error: true });
      }
    } catch {
      setStatus({ text: "전송 중 오류가 발생했습니다. 전화나 이메일로 문의해 주세요.", error: true });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-9" aria-labelledby="form-title">
      <h2 id="form-title" className="text-[28px]">
        상담 예약 남기기
      </h2>
      <p className="mt-2 text-text-muted">남겨 주시면 확인하는 대로 전화 드립니다.</p>

      {/* 봇 방지 honeypot (사람에게는 보이지 않음) */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-[17px] font-semibold">
            보호자 성함 <span className="text-accent">(필수)</span>
          </span>
          <input type="text" name="name" required maxLength={LIMITS.name} autoComplete="name" className={inputCls} />
        </label>

        <label className="block">
          <span className="text-[17px] font-semibold">
            연락처 <span className="text-accent">(필수)</span>
          </span>
          <input
            type="tel"
            name="phone"
            required
            maxLength={LIMITS.phone}
            autoComplete="tel"
            inputMode="tel"
            placeholder="010-0000-0000"
            className={inputCls}
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-[17px] font-semibold">문의 유형</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {TYPES.map((t, i) => (
            <label
              key={t}
              className="flex min-h-[52px] cursor-pointer items-center gap-3 rounded-[12px] border-[1.5px] border-line-strong bg-surface px-4 text-[17px] has-[:checked]:border-accent has-[:checked]:bg-accent-soft"
            >
              <input type="radio" name="type" value={t} defaultChecked={i === 0} className="h-5 w-5 accent-accent" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="text-[17px] font-semibold">
          방문 희망일 <span className="font-normal text-text-muted">(선택)</span>
        </span>
        <input type="date" name="visitDate" className={inputCls} />
      </label>

      <label className="mt-6 block">
        <span className="text-[17px] font-semibold">
          문의 내용 <span className="text-accent">(필수)</span>
        </span>
        <textarea
          name="message"
          rows={5}
          required
          maxLength={LIMITS.message}
          placeholder="어르신의 장기요양등급, 현재 상태, 궁금한 점을 편하게 적어 주세요."
          className={inputCls}
        />
      </label>

      <div className="mt-6 rounded-[12px] bg-bg-alt p-5">
        <label className="flex cursor-pointer items-start gap-3 text-[17px]">
          <input type="checkbox" name="privacyConsent" required className="mt-1 h-5 w-5 shrink-0 accent-accent" />
          <span>
            개인정보 수집·이용에 동의합니다. <span className="font-semibold text-accent">(필수)</span>
          </span>
        </label>
        <p className="mt-3 text-[16px] leading-relaxed text-text-muted">
          수집 항목: 이름, 연락처, 문의 유형, 방문 희망일, 문의 내용 · 수집 목적: 입소 상담 및 문의 응대 · 보유 기간:
          문의 처리 완료 후 1년 · 국외 이전: 문의 접수·호스팅을 위해 Web3Forms(인도)·Vercel(미국)로 전송. 동의를 거부할 수 있으나, 미동의 시 문의 접수가 제한됩니다. 자세한 내용은{" "}
          <Link href="/privacy" className="text-link">
            개인정보처리방침
          </Link>
          을 참고하세요.
        </p>
      </div>

      <button type="submit" disabled={submitting} className="btn btn-primary mt-7 w-full !min-h-[60px] disabled:opacity-60">
        {submitting ? "보내는 중..." : "상담 예약 보내기"}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`mt-4 text-[17px] font-medium ${status.error ? "text-[#a13d2d]" : "text-accent-strong"}`}
      >
        {status.text}
      </p>
    </form>
  );
}
