
import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import Hero from "@/components/Hero/Index";
import TestCom from "@/components/TestCom";
import Sidebar from "@/components/Sidebar/Sidebar";
import Feed from "@/components/feed/Feed";
import { Carousel } from "@/components/ui/carousel";
export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col  items-center ">
  <div className="flex w-full">
    <div className=" w-full lg:w-9/12  ">
    
    <Hero  />
  
    <Feed  />
    </div>
    <div className=" hidden lg:flex w-3/12">
      <Sidebar   />
    </div>
  </div>
 
    </div>
  );
}
