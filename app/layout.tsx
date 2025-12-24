import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Habby Valle - Portfolio",
  description: "Portfolio website of Habby Valle, a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}
