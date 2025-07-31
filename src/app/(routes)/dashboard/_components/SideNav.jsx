"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function SideNav() {
  const path = usePathname();

  const menuList = [
    { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { id: 2, name: "Incomes", icon: CircleDollarSign, path: "/dashboard/incomes" },
    { id: 3, name: "Budget", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 4, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
    { id: 5, name: "Upgrade", icon: ShieldCheck, path: "/dashboard/upgraded" },
  ];

  return (
    <div className="hidden md:flex h-screen w-64 flex-col justify-between p-5 border shadow-sm fixed">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/chart-donut.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-blue-800">FinanSmart</span>
        </div>

        {/* Navigation Menu */}
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
      </div>

      {/* Profile Section */}
      <div className="flex gap-2 items-center">
        <UserButton />
        <span>Profile</span>
      </div>
    </div>
  );
}
