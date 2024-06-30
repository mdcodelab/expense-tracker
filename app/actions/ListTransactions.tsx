"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

interface Transactions {
    id: string;
    text: string;
    amount: number;
    userId: string;
    createdAt: Date;
}

export async function getUserTransactions (): Promise<{transactions?: Transactions[]; error?: string;}> {
  const { userId } = auth();
  
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId: userId },
      orderBy: {
        createdAt: "desc"
      }
    });
    
    return { transactions: transactions };
  } catch (error) {
    console.error("Database error", error);
    return { error: "Database error" };
  }
}


