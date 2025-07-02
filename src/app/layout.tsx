import "material-symbols";
import "remixicon/fonts/remixicon.css";
import "react-calendar/dist/Calendar.css";
import "swiper/css";
import "swiper/css/bundle";

// globals
import "./globals.css";

import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";

import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "react-hot-toast";

// Initialize fonts
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "المصرية الاسترالية | Powered by ENS",
  description: "Powered by ENS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
