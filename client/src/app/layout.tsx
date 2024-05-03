"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";

import { store } from "@/redux/order";
import { Provider } from "react-redux";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between h-screen">
          <div>
            <header>
              <Header />
            </header>
            <div className="w-[100%] h-screen overflow-y-auto">
              <main>
                <Provider store={store}>{children}</Provider>
              </main>
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
