"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { ActionPathnameNormalizer } from "next/dist/server/future/normalizers/request/action";

export async function deleteTransaction(transactionId: string): Promise<{message?: string; error?: string }> {
    const { userId } = auth();
  
  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const deleteRequest = await db.transaction.delete({
        where: {id: transactionId,
            userId: userId
        }  
    })
  
    revalidatePath("/");
      return { message: "Transaction deleted." };
    } catch (error) {
    return {error: "Database error."}
  }
}