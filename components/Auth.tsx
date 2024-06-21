'use client';

import { useAuth } from "@/lib/auth";
import Image from "next/image";
import logo from '@/public/images/svgviewer-output.svg'
import Link from "next/link";

function Auth() {
    const auth = useAuth();
    return (
        <div className="flex flex-col justify-center items-center  w-full h-screen">

            <Image alt="logo" src={logo} width={64} />
            {!auth?.user ?
                <button
                    className="mt-4 leading-4"
                    onClick={(e) => auth?.signinWithGithub()}>Sign In
                </button>
                :
                <>
                <button
                    className="mt-4 leading-4"
                    onClick={(e) => auth?.signout()}>Sign out
                </button>
                <Link
                className="mt-4 leading-4"
                href={'/dashboard'}>View Dashboard
            </Link>
            </>
            }
        </div >
    )
}

export default Auth