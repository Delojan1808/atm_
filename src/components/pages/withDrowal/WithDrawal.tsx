
import { useState } from 'react';
import Div from '../../atoms/div/Div';
import Form from '../../organisms/form/Form';
import MainLayout from '../../templates/mainLayout/MainLayout'

const WithDrawal = () => {
  const [balance,setBalance]=useState<string>('');
  const[amount,setAmount]=useState<string>('');
  const getBalance=async()=>{
    const response=await fetch ("")
  }
  return (
    <MainLayout>
      <Div>
        <Form
          title={"Withdrawal"}
          inputFields={[
            {
              label: {
                htmlFor: '',
                name: 'Account Balance',
                className: ''
              },
              input: {
                // placeholder: '',
                className: '',
                id: '',
                value:balance,
                type: 'number'
              }
            },
            {
              label: {
                htmlFor: "withdrawalAmount",
                name: "Withdrawal Amount:",
                className: "",
              },
              input: {
                placeholder: "",
                onChange: (e)=>setAmount(e.target.value),
                className: "",
                id: "withdrawalAmount",
                value: amount,
                min:100,
                type: "number",
              },
            },
          ]}
          button={{
            type: "button",
            name: "processed",
            className: "",
            onClick: function (): void {
              throw new Error("Function not implemented.");
            },
          }}
        ></Form>

        <div className="withdrawalTable">
          <table className="withdrawalTableOut">
            <thead>
              <tr>
                <th>Notes</th>
                <th>no of Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5000</td>
                <td></td>
              </tr>
              <tr>
                <td>1000</td>
                <td></td>
              </tr>
              <tr>
                <td>500</td>
                <td></td>
              </tr>
              <tr>
                <td>100</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      
        
      </Div>
    </MainLayout>
  )
}

export default WithDrawal