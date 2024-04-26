'use client'
import { GeistSans } from "geist/font/sans";
import { useState } from "react";
import "./globals.css";
import Index from "@/components/Topnavbar/Index";
import { ProfileContextProvider } from "@/components/ProfileContext";
import { SlideProvider } from "@/components/QuestStepsContext";
// In app directory
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { MdClose } from "react-icons/md";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

/*export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

   const [showWarning, setshowWarning] = useState(true)

  
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-950 text-gray-300">
      <ProgressBar
          height="3px"
          color="#3b82f6"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <main className="min-h-screen ">
           {showWarning  &&
           <div className="w-full sticky top-0 h-6 bg-red-600 animate-pulse max-w-6xl mx-auto px-6 flex items-center justify-between">
             <p className="text-white text-center ">still in developement things  might break</p>
              <MdClose  className="text-white w-5 h-5 cursor-pointer" onClick={() => setshowWarning(! showWarning)} />
           </div>
}
          <ProfileContextProvider>
        
          <Index   />
          {children}
         
          </ProfileContextProvider>
        </main>
      </body>
    </html>
  );
}
