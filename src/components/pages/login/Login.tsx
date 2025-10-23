import { useState } from "react";
import { useAuth } from "../../../AuthContext";
import Form from "../../organisms/form/Form";
import "./Login.css";
import MainLayout from "../../templates/mainLayout/MainLayout";
import { useNavigate } from "react-router-dom";
import Div from "../../atoms/div/Div";

const Login = () => {

  // const login = useAuth();
  const navigate=useNavigate();

  const postLogin=async()=>{
    const payload={
      cardNo:Number(cardNo) ,
      pin: Number(pin)
    };
    const response=await fetch("http://localhost:8080/atm/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload)
    })
    console.log(payload);
    

    if(response.ok){
      alert("Login sucsessful");
      navigate('/home');

    }else{
      alert("login Failed");
    }
  }
  const handleLogin = () => {
    if(cardNo.length==16 && pin!=''){
      postLogin();
    }else {
      alert("Card number or pin is inValid");
    }

    
    // login.login("delo");

    // console.log(login);
  };

  const [cardNo, setCardNo] = useState<string>("");
  const [pin, setPin] = useState<string>("");

  return (
    <MainLayout>
      <Div >
        <Form
          title={"Login"}
          inputFields={[
            {
              label: {
                htmlFor: "cardNo",
                name: "Card Number: ",
                className: "",
              },
              input: {
                placeholder: "xxxx-xxxx-xxxx-xxxx",
                onChange: (e) => setCardNo(e.target.value),
                className: "cardNo",
                id: "cardNo",
                type: "number",
                value: cardNo,
              },
            },
            {
              label: {
                htmlFor: "pin",
                name: "Pin: ",
                className: "",
              },
              input: {
                placeholder: "Pin Number",
                onChange: (e) => {
                  setPin(e.target.value);
                },
                className: "",
                value: pin,
                id: "pin",
                type: "password",
              },
            }
          ]}
          button={{
            type: "button",
            name: "Login",
            className: "",
            onClick: handleLogin,
          }}
        />
      </Div>
    </MainLayout>
  );
};
export default Login;
