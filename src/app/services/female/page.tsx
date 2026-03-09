import type { Metadata } from 'next';
import FemaleServicesClient from './FemaleServicesClient';
import { generateBreadcrumbSchema, generateServiceSchema, generateWebPageSchema } from '@/lib/schema';

const SITE_URL = 'https://keifaldiafa.com';

export const metadata: Metadata = {
  title: 'الخدمات النسائية | كيف الضيافة',
  description:
    'مضيفات استقبال ومضيفات مناسبات محترفات بأعلى مستوى من الاحترافية والأناقة. نوفر أفضل طاقم نسائي متخصص في الضيافة الراقية للمناسبات والفعاليات في المملكة العربية السعودية.',
  keywords: [
    'مضيفات', 'مضيفات استقبال', 'مضيفات مناسبات', 'خدمات نسائية',
    'ضيافة نسائية', 'استقبال مناسبات', 'فعاليات نسائية', 'كيف الضيافة',
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'الرئيسية', url: SITE_URL },
  { name: 'خدماتنا', url: `${SITE_URL}/services` },
  { name: 'الخدمات النسائية', url: `${SITE_URL}/services/female` },
]);

const serviceSchema = generateServiceSchema({
  name: 'الخدمات النسائية - كيف الضيافة',
  description: 'مضيفات استقبال ومضيفات مناسبات محترفات بأعلى مستوى من الاحترافية والأناقة',
  url: `${SITE_URL}/services/female`,
});

const webPageSchema = generateWebPageSchema({
  name: 'الخدمات النسائية - كيف الضيافة',
  description: 'مضيفات استقبال ومضيفات مناسبات محترفات',
  url: `${SITE_URL}/services/female`,
});

// Female services Schema.org
const femaleServicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'الخدمات النسائية - كيف الضيافة',
  provider: {
    '@type': 'Organization',
    name: 'كيف الضيافة',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'الخدمات النسائية',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'مضيفات الاستقبال',
          description: 'مضيفات متخصصات في استقبال الضيوف وإدارة مداخل الفعاليات والمؤتمرات',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'مضيفات المناسبات',
          description: 'مضيفات الفعاليات الاجتماعية المتخصصات في تقديم الضيافة والمشروبات',
        },
      },
    ],
  },
};

export default function FemaleServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(femaleServicesSchema) }}
      />
      <FemaleServicesClient />
    </>
  );
}
