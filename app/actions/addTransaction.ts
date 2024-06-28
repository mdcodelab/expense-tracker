"use server";
//will return a promise with a transaction result;

interface TransactionData {
text: string;
amount: number;
}

interface TransactionResult {
    data?: TransactionData;
    error?: string
}

async function addTransaction (formData:formData):Promise <TransactionResult>{
const textValue=formData.get("text");
const amountValue = formData.get("amount");

if(!textValue || !amountValue ) {
    return {error: "Text or amount is missing"}
}

const text:string=textValue.toString(); //ensure text is string
const amount = parseFloat(amountValue.toString()); //ensure amount is number

const transactionData:TransactionData = {
    text,
    amount
}

return {data: transactionData}

}

export default addTransaction