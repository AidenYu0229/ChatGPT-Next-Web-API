/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "佩奇聚合 API",
  description: "ChatGPT 国内版",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "佩奇聚合 API",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="config" content={JSON.stringify(getClientConfig())} />
      <link rel="manifest" href="/site.webmanifest"></link>
      <script src="/serviceWorkerRegister.js" defer></script>
      <style>
        body {
          background: linear-gradient(#ffc0cb, #87cefa);
        }
        /* 取消链接下划线 */
        a {
          text-decoration: none;
          color: inherit; /* 继承父元素的颜色 */
        }
        /* 修改字体大小 */
        .footer {
          font-size: 18px;
        }
      </style>
    </head>
    <body>{children}</body>
    </html>
    
  );
}
