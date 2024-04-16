import React from "react";
import Sidebar from "../../../components/sidebar";
import Header from "@/components/header";

function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between gap-2">
      <Sidebar />
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}

export default AdminDashboardLayout;
