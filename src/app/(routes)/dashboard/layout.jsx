'use client';

import {useEffect} from 'react'
import SideNav from './_components/SideNav';
import DashboardHeader from './_components/DashboardHeader';
import { db } from '../../../../utils/dbConfig';
import { Budgets } from '../../../../utils/schema';
import { ClerkProvider, useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';

function DashboardLayout({children}) {
    const {user} = useUser();
    const router = useRouter();
    useEffect(() => {
        user && checkUserBudgets()
    }, [user]);
    const checkUserBudgets = async () => {
        const results = await db.select.from(Budgets).where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
        if(result?.length === 0){
            router.replace('/dashboard/budgets')
        }
    }
    return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <div>
            {/* Side NavBar */}
            <div className='fixed md:w-64 hidden md:block'>
                <SideNav/>
            </div>
            <div className='md:ml-64'>
                <DashboardHeader/>
                {children}
            </div>
        </div>
    </ClerkProvider>
    )
}

export default DashboardLayout;