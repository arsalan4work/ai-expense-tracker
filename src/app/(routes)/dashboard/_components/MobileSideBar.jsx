"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const menuList = [
    { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { id: 2, name: "Incomes", icon: CircleDollarSign, path: "/dashboard/incomes" },
    { id: 3, name: "Budget", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 4, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
    { id: 5, name: "Upgrade", icon: ShieldCheck, path: "/dashboard/upgraded" },
  ];

  useEffect(() => {
    setIsOpen(false); // Close sidebar on route change
  }, [path]);

  return (
    <>
      {/* Top Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 gap-8 shadow-sm border-b sticky top-0 bg-white z-50">
        <div><Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} /></div>
        <div className="flex items-center gap-2">
          <Image src="/chart-donut.svg" alt="Logo" width={30} height={30} />
          <span className="text-lg font-bold text-blue-800">FinanSmart</span>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 p-5 shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <Image src="/chart-donut.svg" alt="Logo" width={30} height={30} />
            <span className="text-lg font-bold text-blue-800">FinanSmart</span>
          </div>
          <X className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        {/* Menu Items */}
        <div className="mt-5">
          {menuList.map((menu) => (
            <Link href={menu.path} key={menu.id}>
              <h2
                className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full hover:text-primary hover:bg-blue-100 ${
                  path === menu.path && "text-primary bg-blue-100"
                }`}
              >
                <menu.icon className="w-5 h-5" />
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>

        {/* Footer Profile */}
        <div className="absolute bottom-10 flex gap-2 items-center">
          <UserButton />
          <span>Profile</span>
        </div>
      </div>
    </>
  );
}
