import { Bakbak_One } from "next/font/google";
import "./globals.css";

const babakOne = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-babak-one",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Try, Trash or Fire",
  description: "Rate it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${babakOne.variable}`}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
