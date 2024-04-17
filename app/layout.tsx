import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Index from "@/components/Topnavbar/Index";
import { ProfileContextProvider } from "@/components/ProfileContext";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-900 text-gray-300">
        <main className="min-h-screen ">
          <ProfileContextProvider>
          <Index   />
          {children}
          </ProfileContextProvider>
        </main>
      </body>
    </html>
  );
}
