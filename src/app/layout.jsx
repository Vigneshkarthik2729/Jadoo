import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";
import "./landing.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const volkhov = Volkhov({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${volkhov.variable}`}>
        {children}
      </body>
    </html>
  );
}