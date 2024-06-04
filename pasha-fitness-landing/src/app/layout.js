"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../app/hooks/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html dir="rtl" lang="he">
        <body>{children}</body>
      </html>
    </LanguageProvider>
  );
}
