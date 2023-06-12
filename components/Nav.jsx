"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
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
    </nav>
  )
}

export default Nav