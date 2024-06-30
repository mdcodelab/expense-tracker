interface Transactions {
    id: string;
    text: string;
    amount: number;
    userId: string;
    createdAt: Date;
}
import { getUserTransactions } from "@/app/actions/ListTransactions";


async function TransactionsList() {
    const {transactions, error} = await getUserTransactions();
    if(error) {
        return <p className="error">{error}</p>
    }
  return (
    <>
    <h3>History</h3>
    <ul className="list">
        {transactions && transactions.map((transaction) => {
            return <p>{transaction.text}</p>
        })}
    </ul>
      
    </>
  )
}

export default TransactionsList
