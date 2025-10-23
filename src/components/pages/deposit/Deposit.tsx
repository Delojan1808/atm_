import MainLayout from "../../templates/mainLayout/MainLayout";
import Form from "../../organisms/form/Form";
import './Deposit.css'
import Div from "../../atoms/div/Div";

const Deposit = () => {
  return (
    <MainLayout>
      <Div>
        <Form
          title={"Deposit"}
          inputFields={[
            {
              label: {
                htmlFor: "depositAmount",
                name: "Deposit Amount:",
                className: "",
              },
              input: {
                placeholder: "",
                onChange: function (e: any): void {
                  throw new Error("Function not implemented.");
                },
                className: "",
                id: "depositAmount",
                value: "",
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

        <div className="depositTable">
          <table className="depositTableOut">
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
  );
};

export default Deposit;
