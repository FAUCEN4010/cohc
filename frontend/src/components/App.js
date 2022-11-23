import PropsPage from "../pages/PropsPage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import RequireAuth from "../components/RequireAuth";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'



function App() {
  // const store = authStore();
  // const isLoggedIn = store.loggedIn;
  // console.log(isLoggedIn);

  // // // Use effect
  // // useEffect(() => {
  // //   store.fetchUser();
  // //   }, []);
  // // }
  // // store.user.fname

  // let user = store.fetchUser();
  // console.log(user)

  // let userTrail;

  // if (isLoggedIn) {
  //   userTrail = (
  //     <Navbar.Collapse className="justify-content-end">
  //     <Navbar.Text>Logged in as: {user.fname} {user.lname} </Navbar.Text>
  //     </Navbar.Collapse>
  //   );
  // } else {
  //   userTrail = (
  //     <Navbar.Collapse className="justify-content-end">
  //     </Navbar.Collapse>
  //   );
  // }

  // let logoutButton;
  // if (isLoggedIn) {
  //   logoutButton = (
  //     <Nav variant="pills" defaultActiveKey="/logout"><Nav.Link href="/logout">Log Out</Nav.Link></Nav>
  //   );
  // } else {
  //   logoutButton = (
  //     <Nav.Link href="/"></Nav.Link>
  //   );
  // }

  return (
    

    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <div className="main-container">
            <Navbar.Brand href="/" > 
              <FontAwesomeIcon icon={faFaceSmile} />
            
              &nbsp;
              City of Happy Citizens</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/*
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse>            
            
            {userTrail}

            {logoutButton} 
            */}
            
          </div>
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
