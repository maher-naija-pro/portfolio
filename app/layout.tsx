import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";


import { useSession } from "next-auth/react"
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "maher naija's Portfolio",
  description: "Maher naija Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
       <SessionProvider session={session}>
 
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://toppng.com/uploads/preview/upload-to-cloud-free-cloud-ico-115632435885ouurbhg7b.png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      </html>
         </SessionProvider>
  );
}
