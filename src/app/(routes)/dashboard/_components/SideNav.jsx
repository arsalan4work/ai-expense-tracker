"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  Menu,
  X,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budget",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgraded",
    },
  ];

  useEffect(() => {
    setIsOpen(false); // close sidebar on route change
  }, [path]);

  const renderMenu = () => (
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
  );

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <div className="hidden md:flex h-screen w-64 flex-col justify-between p-5 border shadow-sm fixed">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/chart-donut.svg"
              alt="Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-blue-800">FinanSmart</span>
          </div>
          {renderMenu()}
        </div>
        <div className="flex gap-2 items-center">
          <UserButton />
          <span>Profile</span>
        </div>
      </div>

      {/* ===== Mobile Header + Hamburger ===== */}
      <div className="md:hidden flex justify-between items-center p-4 shadow-sm border-b sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <Image src="/chart-donut.svg" alt="Logo" width={30} height={30} />
          <span className="text-lg font-bold text-blue-800">FinanSmart</span>
        </div>
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
      </div>

      {/* ===== Mobile Sidebar ===== */}
      {isOpen && (
        <>
          {/* Blur Background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide Sidebar */}
          <div className="fixed left-0 top-0 h-full w-64 bg-white z-50 p-5 shadow-lg transition-transform duration-300 animate-slide-in">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <Image src="/chart-donut.svg" alt="Logo" width={30} height={30} />
                <span className="text-lg font-bold text-blue-800">FinanSmart</span>
              </div>
              <X className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>
            {renderMenu()}
            <div className="absolute bottom-10 flex gap-2 items-center">
              <UserButton />
              <span>Profile</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
