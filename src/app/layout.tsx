import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { JotformAgentEmbed } from "@/components/jotform-agent-embed";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Angélica Roque · Sistemas con IA para negocios";
const description =
  "Webs, automatizaciones, dashboards y sistemas con IA para negocios que quieren ahorrar tiempo, captar más clientes y operar con menos caos. Miami.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://build-with-angelica.vercel.app"
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_US",
    images: [{ url: siteConfig.images.profile, alt: "Angélica Roque" }],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/images/angelica-roque-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen w-full flex-col">
        <Providers>{children}</Providers>
        <JotformAgentEmbed />
      </body>
    </html>
  );
}
