'use client';
import React,{useState, useEffect} from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";

export default function Page() {
  const { user } = useUser();
  return (
    <div className="p-8">
      <h2 className="font-bold text-4xl">Hi, {user?.fullName}</h2>
      <p className="text-gray-500">Here's what happening with you money. Let's manage your expenses</p>
      <CardInfo/>
    </div>
  )
}
