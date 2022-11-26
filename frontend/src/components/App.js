import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import SignupPage from "../pages/SignupPage";
import RequireAuth from "../components/RequireAuth";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Header from "../components/Header";


function App() {

  return (
    

        <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<RequireAuth><MainPage /></RequireAuth>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
