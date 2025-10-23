import React, { useState } from "react";
import MainLayout from "../../templates/mainLayout/MainLayout";
import Div from "../../atoms/div/Div";
import Button from "../../atoms/button/Button";
import './TransactionHistory.css'

const TransactionHistory = () => {
  const [showDepositTable, setShowDepositTable] = useState<boolean>(false);
  const [showWithdrawelTable, setShowWithdrawelTable] =useState<boolean>(false);

  return (
    <MainLayout>
      <Div>
        <Button
          type={"button"}
          name={"Deposit Transactions"}
          className={"Deposit Transactions"}
          onClick={() => setShowDepositTable(!showDepositTable)}
        />
        <Button
          type={"button"}
          name={"Withdrawel Transactions"}
          className={"Withdrawel Transactions"}
          onClick={() => setShowWithdrawelTable(!showWithdrawelTable)}
        />
        {showDepositTable && (
          <>
            <h2>Deposit</h2>
            <table className="deposit transactions">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>5000</th>
                  <th>1000</th>
                  <th>500</th>
                  <th>100</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        )}
        {showWithdrawelTable && (
          <>
            <h2>Withdrawel</h2>
            <table className="withdrawel transactions">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>5000</th>
                  <th>1000</th>
                  <th>500</th>
                  <th>100</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </Div>
    </MainLayout>
  );
};

export default TransactionHistory;
