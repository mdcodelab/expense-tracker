
import formatNumberWithCommas from "@/lib/utils"
interface Transactions {
    id: string;
    text: string;
    amount: number;
    userId: string;
    createdAt: Date;
}


function Transaction({transaction}: Transactions) {
    const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>{sign} ${formatNumberWithCommas(Math.abs(transaction.amount))}</span>
    </li>
  )
}

export default Transaction
