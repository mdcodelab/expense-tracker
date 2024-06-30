import { getIncomeExpense } from "@/app/actions/GetUserBalance";
import formatNumberWithCommas from "@/lib/utils";

const IncomeExpense = async () => {
  interface IncomeExpenseData {
    income?: number;
    expense?: number;
  }

  const { income, expense }: IncomeExpenseData = await getIncomeExpense();

  // Convert to number after formatting to string
  const formattedIncome = income ? parseFloat(income.toFixed(2)) : 0;
  const formattedExpense = expense ? parseFloat(expense.toFixed(2)) : 0;
  
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${formatNumberWithCommas(formattedIncome)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${formatNumberWithCommas(formattedExpense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
