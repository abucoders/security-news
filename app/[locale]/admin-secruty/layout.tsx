import React from "react";

import { ChildProps } from "@/types";

import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const Layout = ({ children }: ChildProps) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="w-full pt-[12vh] pl-[320px]">
        <div className="bg-secondary size-full rounded-md px-4 pb-4">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
