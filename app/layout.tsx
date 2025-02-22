import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as per your design requirements
});

// Dynamically import components
const Navbar = dynamic(() => import("./components/Navbar"), {
  loading: () => <div>Loading...</div>,
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div>Loading...</div>,
});

export const metadata: Metadata = {
  title: "Solar Cool",
  description: "Solar Cool Website",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
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
