'use client'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from "../_components/MobileSideBar";


export default function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div><MobileSidebar /></div>
        {/* User Button */}
        <div>
            <UserButton afterSwitchSessionUrl='/'/>
        </div>
    </div>
  )
}
