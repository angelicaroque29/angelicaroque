import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/service-detail";
import { translations } from "@/lib/i18n/translations";
import { serviceIdFromSlug, serviceOfferIds, serviceSlugs } from "@/lib/service-offers";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceOfferIds.map((id) => ({ slug: serviceSlugs[id] }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const id = serviceIdFromSlug(slug);
  if (!id) return {};

  const item = translations.es.serviceDetails.items[id];
  return {
    title: `${item.title} | Angélica Roque`,
    description: item.intro,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const id = serviceIdFromSlug(slug);
  if (!id) notFound();

  return <ServiceDetail id={id} />;
}
