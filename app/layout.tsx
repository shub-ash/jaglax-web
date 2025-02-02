import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koala | By Jaglax Homes",
  description:
    "We are passionate about offering travellers an unparalleled hospitality experience across our luxury villas and apartments in Goa.",
  icons: [
    {
      rel: "icon",
      sizes: "any",
      url: "favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="bg-beige-100 font-nunito text-beige-900 text-sm">
        {children}
      </body>
    </html>
  );
}
