import React from "react";
import Header from "../../components/header";
import SideNav from "./_components/side-nav";

function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex justify-between gap-2">
        <div className="w-[300px]">
          <SideNav />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
