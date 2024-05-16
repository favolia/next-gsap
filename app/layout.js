import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXT GSAP",
  description: "NEXT-GSAP Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col gap-y-10 justify-center items-center w-full h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
