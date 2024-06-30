import { getUserBalance } from "@/app/actions/GetUserBalance";
import formatNumberWithCommas from "@/lib/utils";

interface BalanceData {
    balance?: number; 
}

async function Balance() {
    const { balance }: BalanceData = await getUserBalance();
    
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${formatNumberWithCommas(balance ?? 0)}</h1>
        </>
    );
}

export default Balance;
