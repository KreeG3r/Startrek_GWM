"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserloggedIn = true;

  const [providers, setProvider] = useState
  (null);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();

      setProvider(response);
    }

    setProvider();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/LOGO2.png" 
         alt="GWM Logo"
         width={40}
         height={40}
         className="object-contain"
        />
        <Image src="/assets/images/STRKLogo.png" alt="Logo" 
        className="object-contain"
        width={80}
        height={50}/>
      </Link>

      {/* desktop navigation */}
      <div className="sm:flex hidden">
        {isUserloggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href="/profile">
              <Image src="/assets/images/LOGO2.png" 
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              />
            </Link>
          </div>
        ): (
          <>
          {providers && 
            Object.keys(providers).map((provider) =>
            (
              <button
              type="button"
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className='black_btn'
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav