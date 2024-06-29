import {getUserBalance} from "@/app/actions/GetUserBalance";
import formatNumberWithCommas from "@/lib/utils";

async function Balance() {
    const {balance} = await getUserBalance();
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${formatNumberWithCommas(balance) ?? 0}</h1>
    </>
  )
}

export default Balance
