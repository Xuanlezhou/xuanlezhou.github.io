import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yihan Shi",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <header className="absolute z-10 w-full items-center md:hidden">
          <Navbar />
        </header>
        <div className="flex min-h-screen flex-row">
          <div className="w-80 max-md:hidden">
            <Sidebar />
          </div>
          <div className="grow px-8 py-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
