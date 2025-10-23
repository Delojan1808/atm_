import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { useAuth } from "../AuthContext";
import Home from "./pages/logout/Home";
import TransactionHistory from "./pages/transitionHistory/TransactionHistory";
import Deposit from "./pages/deposit/Deposit";
import WithDrawal from "./pages/withDrowal/WithDrawal";
import Welcome from "./pages/welcome/Welcome";

const AppRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {/* <Route path="/login" element={<Login />} /> */}
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactionHistory" element={<TransactionHistory />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/WithDrawl" element={<WithDrawal />} />
          <Route path="/" element={<Welcome />} />
        </>
      )}
    </Routes>
  );
};
export default AppRoute;
