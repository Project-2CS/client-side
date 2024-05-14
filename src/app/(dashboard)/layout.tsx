"use server"
import DashboardNav from "@/app/components/layout/dashboard_nav";
import SideBar from "@/app/components/layout/side_bar";
import { getUserInfo } from "./server/functions";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getUserInfo();
  
  return (
    <main className="flex">
      <SideBar />
      <div className="w-full flex flex-col gap-24 bg-lightGray">
        <DashboardNav pic={data.profilePicture}  />
        {children}
      </div>
    </main>
  );
}
