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

const title = "Angelica Roque | AngieInTech · AI Systems for Small Business";
const description =
  "Websites, automations, dashboards, and AI systems for businesses that want to save time, capture more leads, and run with less chaos. Miami · EN/ES.";

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
    locale: "en_US",
    images: [{ url: siteConfig.images.profile, alt: "Angelica Roque" }],
  },
  icons: {
    icon: siteConfig.images.logo,
    apple: siteConfig.images.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen w-full flex-col">
        <Providers>{children}</Providers>
        <JotformAgentEmbed />
      </body>
    </html>
  );
}
