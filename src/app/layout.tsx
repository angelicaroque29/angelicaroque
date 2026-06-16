import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

const title = "Angelica Roque | AngieInTech · Tecnología simple para negocios que quieren crecer";
const description =
  "Angelica Roque construye páginas web, automatizaciones y sistemas digitales para que tu negocio consiga más clientes, ahorre tiempo y trabaje con más claridad. Ingeniera de software @ AmEx. Miami. EN/ES.";

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
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen w-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
