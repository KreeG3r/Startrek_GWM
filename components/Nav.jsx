"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserloggedIn = true;

  const [providers, setProvider] = useState
  (null);
  const [toggleDropdown,settoggleDropdown] = useState (false);

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
        <Image src="/assets/images/GWM_STRTRK.JPG" 
         alt="GWM Suanluang"
         width={50}
         height={50}
         className="object-contain"
        />
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

      {/* mobile navigation */}   
      <div className='sm:hidden flex relative'>
        {isUserloggedIn ? (
      <div className="felx">
        <Image src="/assets/images/LOGO2.png" 
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => settoggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className='dropdown'>
                  <Link
                   href="/profile"
                   className="dropdown_link"
                   onClick={() => setToggleDropdown(false)}
                  >
                    My Profie
                  </Link>
                  <Link
                   href="/create-prompt"
                   className="dropdown_link"
                   onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                  type='button'
                  onClick={() => { setToggleDropdown(false);
                  signOut(); 
                }}
                className='mt-5 w-full black_btn'
                  >
                    Sign Out
                  </button>
                </div>
              )}
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