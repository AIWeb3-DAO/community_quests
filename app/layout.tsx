
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

  export const metadata = {
    title: "Discover polkadot",
     description : "Discover a wide variety of apps, blockchains, wallets and explorers, built on th Polkadot ecosystem by developers and contributors from across the globe.",
     canonical : "https://www.canonical.ie/",
      
     openGraph: {
      title: 'Discover Polkadot | Parachains',
      description: 'Discover a wide variety of apps, blockchains, wallets and explorers, built on th Polkadot ecosystem by developers and contributors from across the globe.',
      images : [
        {
          url: 'https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public/quests_platform/Discover%20Polkadot.png',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
        {
          url: 'https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public/quests_platform/Discover%20Polkadot.png',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
        {
          url: 'https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public/quests_platform/Discover%20Polkadot.png',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ]
    }
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-950 text-gray-300">
    {/*}  <ProgressBar
          height="3px"
          color="#3b82f6"
          options={{ showSpinner: false }}
          shallowRouting
  />*/}
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
