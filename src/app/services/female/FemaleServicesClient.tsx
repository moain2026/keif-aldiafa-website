"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IMAGES } from "@/lib/images";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const WA = "966535636933";

const femaleServicesData = {
  reception: {
    id: "reception-hostesses",
    title: "مضيفات الاستقبال",
    subtitle: "الانطباع الأول يُصنع هنا",
    description:
      "مضيفات متخصصات في الاستقبال والترحيب بالضيوف عند مداخل الفعاليات والمؤتمرات. يجمعن بين الأناقة الراقية والإتيكيت العالي ليمنحن كل ضيف تجربة ترحيب لا تُنسى.",
    coverImage: IMAGES.services.female.cover,
    galleryImages: IMAGES.services.female.reception,
    features: [
      { icon: "✨", label: "مظهر راقٍ ومنضبط وفق درس كود الفعالية" },
      { icon: "🗣️", label: "إتقان بروتوكولات الاستقبال الرسمية وغير الرسمية" },
      { icon: "📋", label: "إدارة قوائم الضيوف والتحقق من الدعوات" },
      { icon: "🗺️", label: "توجيه الضيوف وإرشادهم داخل الفعالية" },
      { icon: "🌐", label: "التواصل بالعربية والإنجليزية عند الحاجة" },
    ],
    suitableFor: [
      "مؤتمرات الأعمال والمحافل الرسمية",
      "حفلات التخرج والحفلات الخاصة",
      "معارض المنتجات والمؤتمرات التقنية",
      "افتتاحيات الشركات والمنشآت",
      "المناسبات الحكومية والرسمية",
    ],
    accentColor: "from-amber-900/20 to-amber-700/10",
    badgeColor: "bg-amber-900/30 text-amber-300 border-amber-700/30",
  },
  events: {
    id: "event-hostesses",
    title: "مضيفات المناسبات",
    subtitle: "ضيافة تُلامس القلوب",
    description:
      "مضيفات محترفات متخصصات في تقديم خدمة الضيافة داخل قاعات الأفراح والفعاليات الاجتماعية. يُقدّمن القهوة العربية والمشروبات والتوزيعات بأسلوب أنيق يعكس تراث الضيافة السعودية الأصيل.",
    coverImage: IMAGES.services.female.cover,
    galleryImages: IMAGES.services.female.hostess,
    features: [
      { icon: "☕", label: "تقديم القهوة العربية والمشروبات الفاخرة" },
      { icon: "🎁", label: "توزيع الهدايا والتوزيعات على الضيوف" },
      { icon: "🌹", label: "ترحيب وتكريم الضيفات بأسلوب راقٍ" },
      { icon: "🎀", label: "تنسيق طاولات الضيافة وإعادة تجهيزها باستمرار" },
      { icon: "🕐", label: "متواجدات طوال الفعالية دون انقطاع" },
    ],
    suitableFor: [
      "حفلات الأعراس والخطوبة",
      "حفلات السيدات والسهرات الخاصة",
      "مناسبات العيد والاحتفالات العائلية",
      "حفلات التخرج النسائية",
      "فعاليات المدارس والجامعات",
    ],
    accentColor: "from-rose-900/20 to-rose-700/10",
    badgeColor: "bg-rose-900/30 text-rose-300 border-rose-700/30",
  },
};

export default function FemaleServicesClient() {
  return (
    <div>
      <Breadcrumbs />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.services.female.cover}
            alt="الخدمات النسائية - كيف الضيافة"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0f0f]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#c9a84c] text-sm font-medium">
            الخدمات النسائية
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-tajawal">
            ضيافة تليق بكل سيدة
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            طاقم نسائي متخصص يجمع بين الأناقة والاحترافية في كل مناسبة
          </p>
        </motion.div>
      </section>

      {/* ── Service Sections ── */}
      {Object.values(femaleServicesData).map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 px-4 ${index % 2 === 0 ? "" : "bg-white/[0.02]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 0 ? "" : "lg:grid-flow-dense"
              }`}
            >
              {/* ── Text Content ── */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className={index % 2 !== 0 ? "lg:col-start-2" : ""}
              >
                <span
                  className={`inline-block mb-3 px-3 py-1 rounded-full border text-xs font-medium ${service.badgeColor}`}
                >
                  {service.subtitle}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-tajawal">
                  {service.title}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-10">
                  {service.features.map((feat) => (
                    <div key={feat.label} className="flex items-center gap-3">
                      <span className="text-xl">{feat.icon}</span>
                      <span className="text-white/75 text-sm">{feat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Suitable For */}
                <div
                  className={`p-5 rounded-2xl bg-gradient-to-br ${service.accentColor} border border-white/5`}
                >
                  <h3 className="text-[#c9a84c] font-semibold mb-3 text-sm">
                    مناسب لـ
                  </h3>
                  <ul className="space-y-2">
                    {service.suitableFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-white/60 text-sm"
                      >
                        <span className="text-[#c9a84c] text-xs">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 flex gap-4 flex-wrap">
                  <a
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(
                      `مرحباً، أود الاستفسار عن خدمة ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a84c] text-black font-bold text-sm hover:bg-[#b8962e] transition-colors"
                  >
                    <span>احجزي الآن</span>
                    <span>←</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:border-[#c9a84c]/50 transition-colors"
                  >
                    تواصلي معنا
                  </Link>
                </div>
              </motion.div>

              {/* ── Image Gallery ── */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`grid grid-cols-2 gap-3 ${
                  index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {/* Main cover image */}
                <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9] relative">
                  <Image
                    src={service.coverImage}
                    alt={`${service.title} - صورة الغلاف`}
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Gallery images */}
                {service.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden aspect-square relative"
                  >
                    <Image
                      src={img}
                      alt={`${service.title} - صورة ${i + 1}`}
                      fill
                      quality={75}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── FAQ Section ── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12 font-tajawal"
          >
            أسئلة شائعة
          </motion.h2>
          {[
            {
              q: "ما الفرق بين مضيفات الاستقبال ومضيفات المناسبات؟",
              a: "مضيفات الاستقبال متخصصات في الترحيب وإدارة مداخل الفعاليات، بينما مضيفات المناسبات يعملن داخل القاعة لتقديم الضيافة والمشروبات طوال الفعالية.",
            },
            {
              q: "هل يمكن توفير زي موحد مخصص للمناسبة؟",
              a: "نعم، نوفر خيارات متعددة للزي الرسمي ويمكن تنسيق درس كود يتناسب مع هوية فعاليتك بالكامل.",
            },
            {
              q: "ما الحد الأدنى لعدد المضيفات لكل فعالية؟",
              a: "يبدأ الحد الأدنى من مضيفتين، ويُحدد العدد المناسب بناءً على حجم الفعالية وطبيعتها.",
            },
          ].map((faq) => (
            <details key={faq.q} className="mb-4 group">
              <summary className="flex justify-between items-center p-5 rounded-xl bg-white/[0.04] border border-white/5 cursor-pointer text-white font-medium list-none">
                {faq.q}
                <span className="text-[#c9a84c] transition-transform group-open:rotate-180 mr-4">
                  ▾
                </span>
              </summary>
              <div className="px-5 py-4 text-white/60 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))",
            border: "1px solid rgba(184,134,11,0.2)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2
              className="text-[#F5F5DC] mb-3 font-tajawal"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                fontWeight: 800,
              }}
            >
              جاهزات لإضافة لمسة فخامة لمناسبتك
            </h2>
            <p className="text-[#F5F5DC]/50 text-sm mb-6 max-w-lg mx-auto">
              تواصلي معنا الآن واحصلي على استشارة مجانية
            </p>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent(
                "مرحباً، أود الاستفسار عن الخدمات النسائية لديكم."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white"
              style={{
                background: "linear-gradient(135deg, #1da851, #25D366)",
                fontWeight: 700,
                boxShadow: "0 6px 25px rgba(37,211,102,0.35)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصلي عبر واتساب
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
