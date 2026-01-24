import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import ParticlesBackground from "./components/ParticlesBackground";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CumTech",
  description: "Change the World by Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Script
          id="agile-base-service-key"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.AGILE_BASE_SERVICE_KEY = "svc_iwfj57eolcwwxdsabasi6qaf4e";`,
          }}
        />
        <Script
          src="https://agilebasetag-tokyo-prod.s3.ap-northeast-1.amazonaws.com/index.js"
          strategy="afterInteractive"
        />
        <ParticlesBackground />
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
