// components/Footer.tsx
"use client";

import { Github, Mail, Phone, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full mt-2 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>contact@finansmart.app</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-gray-500" />
            <span>+92 300 1234567</span>
          </div>
          <div>
            <Link href="/dashboard"><Button className="cursor-pointer">Go To Dashboard</Button></Link>
          </div>
        </div>

        {/* Attribution + Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-right">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Finan Smart. Made with
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            by <span className="font-medium">@arsalan</span>
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-400 text-lg">
            <Link
              href="https://github.com/arsalan4work"
              className="hover:text-black dark:hover:text-white"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://ai-finan-smart.vercel.app/"
              className="hover:text-black dark:hover:text-white"
            >
              <Globe className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
