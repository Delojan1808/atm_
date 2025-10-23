// import './App.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import AppRoute from "./components/AppRoute";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
