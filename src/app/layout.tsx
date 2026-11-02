import type { Metadata } from "next";
import localFont from "next/font/local";
import { JotformAgentEmbed } from "@/components/jotform-agent-embed";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
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
    images: [
      {
        url: siteConfig.images.socialShare,
        width: 1200,
        height: 630,
        alt: "Angélica Roque · Software, IA y automatización",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.images.socialShare],
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen w-full flex-col">
        <Providers>{children}</Providers>
        <JotformAgentEmbed />
      </body>
    </html>
  );
}
