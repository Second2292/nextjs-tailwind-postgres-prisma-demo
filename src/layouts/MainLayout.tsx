import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import "./globals.css";

export const metadata: Metadata = {
  title: "KBeta",
  description: "Most Cheap and Best Quality Products",
  // image: "/logo.png",
  // url: "https://kbeta.vercel.app",
  // type: "website",
  keywords: ["KBeta", "Products", "Cheap", "Best Quality"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
