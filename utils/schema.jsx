import { integer, numeric, pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";


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
    amount: numeric('amount').notNull().default("0"),
    budgetId: integer('budgetId').references(() => Budgets.id), // make sure this is lowercase and consistent
    createdBy: varchar('createdBy').notNull(),
    createdAt: timestamp('createdAt').defaultNow(), // ✅ add this to match the insert
  });