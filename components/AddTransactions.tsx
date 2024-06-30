"use client";
import addTransaction from "@/app/actions/addTransaction";
import { useRef } from "react";

function AddTransactions() {
  const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {
        //console.log(formData.get("text"), formData.get("amount"));
        const {data, error} = await addTransaction(formData);

        if(error) {
            alert(error)
        } else {
            alert("Transaction Added");
            formRef.current?.reset();
        }
    }


  return (
    <>
    <h3>Add Transaction</h3>
    <form action={clientAction} ref={formRef}>
    <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Enter amount...'
            step='0.01'
          />
        </div>
        <button className='btn'>Add transaction</button>

    </form>  
    </>
  )
}

export default AddTransactions
