import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVP Frontend",
  description: "MVP Frontend Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono"> 
        {/* <div className="flex justify-center items-center py-6 md:justify-start md:space-x-10 w-full">
          <p className="font-bold text-xl text-primary-900 ml-3 mt-2">MVP News 2024</p>
        </div> */}
        {children}
      </body>
    </html>
  );
}
