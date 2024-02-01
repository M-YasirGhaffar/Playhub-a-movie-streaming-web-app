import React from "react";
import { SearchInput } from "./SearchInput";
import MainNav from "./MainNav";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <MainNav />
      <div className="w-full bg-neutral-100 p-2 lg:hidden ">
        <SearchInput />
      </div>
      {children}
    </main>
  );
}

export default DashboardLayout;