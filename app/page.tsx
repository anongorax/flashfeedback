'use client'
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <h1 className="text-4xl">FLASH FEEDBACK Welcomes {auth?.user?.displayName}</h1>

      <button
        className="py-10 px-15 bg-slate-400 mt-10 h-20 w-20 absolute top-5 left-20 "
        onClick={(e) => auth?.signinWithGithub()}>Sign In</button>

      <button
        className="py-10 px-15 bg-slate-400 mt-10 h-20 w-20  "
        onClick={(e) => auth?.signout()}>Sign out</button>
    </div>

  );
}
