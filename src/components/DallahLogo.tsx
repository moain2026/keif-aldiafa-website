/* eslint-disable @next/next/no-img-element */

/**
 * شعار كيف الضيافة الرسمي
 * يستخدم ملفات SVG من مستودع الأيقونات الرسمي
 *
 * المتغيرات:
 *  - "official"  → logo-1 (كحلي + ذهبي) — الشعار الرسمي ثنائي اللون
 *  - "gold"      → logo-3 (ذهبي + أبيض) — مناسب للخلفيات الداكنة
 *  - "navy"      → logo-2 (كحلي فقط)    — مناسب للخلفيات الفاتحة
 */

type LogoVariant = "official" | "gold" | "navy";

const variantSrc: Record<LogoVariant, string> = {
  official: "/icon.svg",
  gold: "/icon-gold.svg",
  navy: "/icon-navy.svg",
};

export function DallahLogo({
  size = 36,
  variant = "official",
}: {
  size?: number;
  variant?: LogoVariant;
}) {
  return (
    <img
      src={variantSrc[variant]}
      alt="كيف الضيافة - شعار"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        display: "block",
      }}
      loading="eager"
      decoding="async"
    />
  );
}
