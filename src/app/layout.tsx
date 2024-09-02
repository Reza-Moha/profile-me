import type { Metadata } from "next";
import "./globals.css";
import { vazirFont, doranFont } from "@/constants/LocalFonts";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Reza Mohammadzadeh",
  description: "Created with the heart of Reza Mohammadzadeh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} ${doranFont.variable} font-sans bg-gray-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
