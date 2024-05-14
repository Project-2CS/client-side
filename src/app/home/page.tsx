"use server";
import NotFoundPage from "@/app/not-found";
import { fetchUserFiles, getUserInfo } from "../(dashboard)/server/functions";
import HomePageMain from ".";

export default async function Home() {
  const data = await fetchUserFiles();
  const user =  await getUserInfo();
  return <>{data ? <HomePageMain files={data} userPic={user.profilePicture} /> : <NotFoundPage />}</>;
}
