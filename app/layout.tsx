import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar Cool",
  description: "Solar Cool Website"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-white">
          <div className="mb-8">
            <Navbar />
          </div>
          {/* <div className="container mx-auto px-4 sm:px-12 py-4 mt-24"> */}
          {children}
          {/* </div> */}

          <Footer />
        </main>
      </body>
    </html>
  );
}
