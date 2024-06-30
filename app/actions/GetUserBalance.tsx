"use server"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getUserBalance (): Promise<{balance?: number; error?: string;}> {
  const { userId } = auth();
  
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId: userId }
    });
    
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    return { balance: balance };
  } catch (error) {
    return { error: "Database error" };
  }
}


export async function getIncomeExpense():Promise<{income?: number, expense?: number, error?:string}>{
    const{userId}=auth();
    if(!userId) {
        return {error: "User not found."}
    }

    try {
        const transactions = await db.transaction.findMany({
            where: {userId: userId}
        })
        let amounts = transactions.map((transaction) => transaction.amount);
        let income = amounts.filter((item) => item>0 ).reduce((acc, item)=> acc+item, 0);
        let expense = amounts.filter((item) => item<0).reduce((acc, item)=> acc + item, 0);
        return {income, expense: Math.abs(expense)}

    } catch (error) {
        return {error: "Database error."}
    }

}


