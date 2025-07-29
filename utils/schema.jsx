import { integer, numeric, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// Budget Schema
export const Budgets = pgTable('budget', {
    id: serial('id').primaryKey(), 
    name: varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    icon:varchar('icon'),
    createdBy: varchar('createdBy').notNull()
})

// Income Schema
export const Incomes = pgTable('incomes', {
    id: serial('id').primaryKey(), 
    name: varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    icon:varchar('icon'),
    createdBy: varchar('createdBy').notNull()
})

// Expenses Schema
export const Expenses = pgTable('expenses', {
    id: serial('id').primaryKey(), 
    name: varchar('name').notNull(),
    amount: numeric("amount").notNull().default(0),
    BudgetId : integer('budgetId').references(() => Budgets.id),
    createdBy: varchar('createdBy').notNull()
})