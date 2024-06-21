'use client'
import { useAuth } from '@/lib/auth';
import logo from '@/public/images/svgviewer-output.svg'
import Image from 'next/image'
import { MdAccountCircle } from "react-icons/md";

function Navbar() {
    const auth = useAuth();
    return (
        <header className='flex flex-col'>
            <div className='flex flex-row w-full
         bg-white items-center justify-between
          h-20 px-4'>
                <div className='flex gap-4 items-center'>
                    <Image alt="logo" src={logo} width={28} />
                    <p className='font-semibold'>Feedback</p>
                    <p className='font-semibold'>Sites</p>
                </div>
                <div className='flex gap-2 items-center'>
                    {!auth?.user ?
                        <button
                            className='font-semibold'
                            onClick={(e) => auth?.signinWithGithub()}>Sign In
                        </button>
                        :
                        <button className='font-semibold'
                            onClick={(e) => auth?.signout()}>
                            Log Out
                        </button>
                    }
                    {!auth?.user ? (
                        <MdAccountCircle size={32} />
                    ) : (
                        auth.user.photoUrl && (
                            <Image
                                src={auth.user.photoUrl}
                                alt='user image'
                                width={32}
                                height={32}
                            />
                        )
                    )}
                </div>
            </div>

        </header>
    )
}

export default Navbar