"use server";
import { getUserInfo } from "../server/functions";
import MainProfile from ".";
import NotFoundPage from "@/app/not-found";

export default async function Profile() {
  const data = await getUserInfo();
  
  return (
    <>
        <MainProfile
          user={{
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email,
            profilePic: data.profilePicture,
          }}
        />
    </>
  );
}
