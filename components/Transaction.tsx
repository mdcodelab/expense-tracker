
"use client";
import formatNumberWithCommas from "@/lib/utils";
import { deleteTransaction } from "@/app/actions/deleteTransaction";
interface Transactions {
    id: string;
    text: string;
    amount: number;
    userId: string;
    createdAt: Date;
}


function Transaction({transaction}: {transaction:Transactions}) {
    const sign = transaction.amount > 0 ? "+" : "-";

    async function handleDeleteTransaction(transactionId:string) {
        const confirm = window.confirm("Are you sure you want to delete this transaction?");
        if(!confirm) {
            return;
        }
        const {message, error} = await deleteTransaction(transactionId);
        if(error) {alert(error)}
        alert(message);
    }

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>{sign} ${formatNumberWithCommas(Math.abs(transaction.amount))}</span>
      <button className="delete-btn" onClick={()=> handleDeleteTransaction(transaction.id)}>Delete</button>
    </li>
  )
}

export default Transaction
