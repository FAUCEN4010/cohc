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


function App() {

  return (
    

        <div className="App">
          <BrowserRouter>
          <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
          <Navbar.Brand href="/" ><FontAwesomeIcon icon={faFaceSmile} /> &nbsp; City of Happy Citizens</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Property Management System
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
