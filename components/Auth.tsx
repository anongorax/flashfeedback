'use client';

import { useAuth } from "@/lib/auth";
import Image from "next/image";

function Auth() {
    const auth = useAuth();
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <h1 className="text-4xl font-bold">FLASH FEEDBACK</h1>

            {auth?.user && <div className="flex items-center gap-10">
                <Image src={auth?.user?.photoUrl} alt="userImage" width={100} height={100} />
                <p>Current User: {auth?.user?.name}:{auth?.user?.uid}</p>
            </div>}
            <button
                className="mt-10 bg-orange-300 py-5 px-5 rounded-lg border-2
                 border-lime-600"
                onClick={(e) => auth?.signinWithGithub()}>Sign In</button>
            {auth?.user &&
                < button
                    className="mt-10 bg-orange-300 py-5 px-5 rounded-lg border-2
            border-lime-600"
                    onClick={(e) => auth?.signout()}>Sign out</button>
            }        </div >)
}

export default Auth