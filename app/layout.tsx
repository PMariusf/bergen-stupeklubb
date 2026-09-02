import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Bergen Stupeklubb",
    template: "%s | Bergen Stupeklubb",
  },
  description:
    "Stuping for barn, ungdom og voksne i Ado Arena i Bergen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={geist.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
