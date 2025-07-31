"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FeedbackForm from "./FeedbackForm";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDashboardClick = () => {
    if (!isSignedIn) {
      router.push("/sign-in");
    } else {
      router.push("/dashboard");
    }
  };

  if (!isLoaded) return null;

  return (
    <header className="p-5 border shadow-sm bg-white fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Image
            src="/chart-donut.svg"
            alt="Image Not Found!"
            width={40}
            height={25}
          />
          <span className="text-blue-800 font-bold text-xl">Finan Smart</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3 items-center">
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
          <FeedbackForm />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <Menu
            size={28}
            className="cursor-pointer transition-all"
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-6 p-6 animate-slide-in">
          {/* Close Icon */}
          <X
            size={28}
            className="absolute top-6 right-6 cursor-pointer z-50"
            onClick={() => setMobileMenuOpen(false)}
          />

          <Button
            variant="outline"
            className="w-40 rounded-full hover:bg-black hover:text-white transition-all"
            onClick={() => {
              handleDashboardClick();
              setMobileMenuOpen(false);
            }}
          >
            Dashboard
          </Button>

          {isSignedIn ? (
            <UserButton afterSwitchSessionUrl="/" />
          ) : (
            <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-40 rounded-full bg-blue-800 hover:bg-black hover:text-white transition-all">
                Get Started
              </Button>
            </Link>
          )}

          <div onClick={() => setMobileMenuOpen(false)}>
            <FeedbackForm />
          </div>
        </div>
      )}
    </header>
  );
}
