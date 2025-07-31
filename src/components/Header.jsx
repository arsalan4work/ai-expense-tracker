"use client";

import React from 'react';
import Image from "next/image";
import { Button } from './ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FeedbackForm from './FeedbackForm';

export default function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  const handleDashboardClick = () => {
    if (!isSignedIn) {
      router.push('/sign-in');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      {/* Logo */}
      <div className='flex flex-row items-center gap-2'>
        <Image
          src="/chart-donut.svg"
          alt='Image Not Found!'
          width={40}
          height={25}
        />
        <span className='text-blue-800 font-bold text-xl'>Finan Smart</span>
      </div>

      {/* Right side */}
      <div className='flex gap-3 items-center'>
        <Button
          variant="outline"
          className="rounded-full hover:bg-black hover:text-white transition-all duration-200"
          onClick={handleDashboardClick}
        >
          Dashboard
        </Button>
        

        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-up">
            <Button className="rounded-full bg-blue-800 hover:bg-black hover:text-white transition-all duration-200">
              Get Started
            </Button>
          </Link>
        )}
        <div><FeedbackForm/></div>
      </div>
    </div>
  );
}
