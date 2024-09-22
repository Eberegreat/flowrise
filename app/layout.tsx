import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowrise - Productivity that flows with your life",
  description:
    "Unleash your potential by harmonizing your daily tasks and habits with your unique energy rhythms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
