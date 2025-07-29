'use client';

import { db } from '../../../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../../../utils/schema';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import ExpenseListTable from './_components/ExpenseListTable';
import { useUser } from '@clerk/nextjs';

function Page() {
  const [expensesList, setExpensesList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getAllExpenses();
    }
  }, [user]);

  const getAllExpenses = async () => {
    try {
      const result = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
          createdAt: Expenses.createdAt
        })
        .from(Expenses)
        .innerJoin(Budgets, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
        .orderBy(desc(Expenses.id));

      setExpensesList(result.map(row => ({
        id: row.id,
        name: row.name,
        amount: row.amount,
        createdAt: row.createdAt
      })));
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Expenses</h2>
      <ExpenseListTable
        refreshData={getAllExpenses}
        expensesList={expensesList}
      />
    </div>
  );
}

export default Page;
