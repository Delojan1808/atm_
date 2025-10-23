import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";
import Button from "../../atoms/button/Button";
import "./Home.css";
import MainLayout from "../../templates/mainLayout/MainLayout";
import Div from "../../atoms/div/Div";

const Home = () => {
  // const home = useAuth();
  const navigate = useNavigate();
  const handleWithDrawl = () => {
    navigate("/WithDrawl");
  };

  return (
    <MainLayout>
      <Div >
        <Button
          type={"button"}
          name={"Withdrawal"}
          className={""}
          onClick={handleWithDrawl}
        />
        <Button
          type={"button"}
          name={"Deposit"}
          className={""}
          onClick={() => navigate('/deposit')}
        />
        <Button
          type={"button"}
          name={"Transition History"}
          className={""}
          onClick={() => navigate("/transactionHistory")}
        />
        <Button
          type={"button"}
          name={"Log Out"}
          className={""}
          onClick={() => navigate("/")}
        />
      </Div>
    </MainLayout>
  );
};
export default Home;
