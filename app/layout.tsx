import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bergen Stupeklubb",
    template: "%s | Bergen Stupeklubb",
  },
  description:
    "Stuping for barn, ungdom og voksne i Ado Arena i Bergen.",
  applicationName: "Bergen Stupeklubb",
  keywords: [
    "stuping",
    "stupeklubb",
    "Bergen",
    "Ado Arena",
    "stupskole",
    "idrett",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Bergen Stupeklubb",
    title: "Bergen Stupeklubb",
    description:
      "Stuping for barn, ungdom og voksne i Ado Arena i Bergen.",
  },
  twitter: {
    card: "summary",
    title: "Bergen Stupeklubb",
    description:
      "Stuping for barn, ungdom og voksne i Ado Arena i Bergen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const clubSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Bergen Stupeklubb",
  url: siteUrl,
  sport: "Diving",
  email: "hovedtrener@bergen-stupeklubb.no",
  telephone: "+47 932 99 995",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lungegårdskaien 40",
    postalCode: "5015",
    addressLocality: "Bergen",
    addressCountry: "NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" data-scroll-behavior="smooth">
      <body className={`${geist.variable} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(clubSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
