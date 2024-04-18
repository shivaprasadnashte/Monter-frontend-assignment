import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Report Viewer",
  description: "This project is a simple report viewer web application built using Next.js. It allows users to view a list of reports, filter them, and download individual reports.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
