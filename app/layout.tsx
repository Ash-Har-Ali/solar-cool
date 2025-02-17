import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

// Dynamically import components
const Navbar = dynamic(() => import("./components/Navbar"), {
  loading: () => <div>Loading...</div>
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div>Loading...</div>
});

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
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}