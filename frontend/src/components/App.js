import PropsPage from "../pages/PropsPage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import RequireAuth from "../components/RequireAuth";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import authStore from "../stores/authStore";



function App() {
  const store = authStore();
  const isLoggedIn = store.LoggedIn;
  
  return (
    

    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">City of Happy Citizens</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse>            
            <Navbar.Collapse className="justify-content-end">
              {/* <Navbar.Text >
                Logged in as: 
                &nbsp;
                {store.user.fname}
                &nbsp;
                {store.user.lname}
                &nbsp;
              </Navbar.Text> */}
            </Navbar.Collapse>
            <Nav variant="pills" defaultActiveKey="/logout">
              <Nav.Link href="/logout">Log Out</Nav.Link>
            </Nav>
            
            
          </Container>
        </Navbar>
        <Routes>
          <Route index element={<RequireAuth><PropsPage /></RequireAuth>} />
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
