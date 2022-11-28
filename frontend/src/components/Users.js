import React from 'react'
import adminStore from '../stores/adminStore'
import { useState, useRef } from "react";
import {Input} from 'semantic-ui-react'
import User from './User'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {CSVLink} from 'react-csv';
import {useReactToPrint} from 'react-to-print';

export default function Admin () {
    const store = adminStore();

  // for printing the
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // for CSV download
  const csvData = 
  store.users ?
    [
    ['First Name', 'Last Name', 'Date of Birth', 'Email', 'Role'],
    ...store.users.map((user) => [
      user.fname,
      user.lname,
      new Date(user.dob).toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'}),
      user.email,
      user.role
    ])
    ]
    :
    [];


  // useState for search
    const [searchTerm, setSearchTerm] = useState("");
    console.log(store.users);

  return (
    <div style={{ padding: 20 }} ref={componentRef}>
    <Container fluid>
        <Row>
          <Col>
            <h2>Administration Page</h2>
          </Col>

          <Col align="right">

            <h6>Logged in as: 
              {store.user ? (
                <span>&nbsp;{store.user.fname} {store.user.lname} &nbsp;</span>
              ) : (
                <span>&nbsp; Administrator &nbsp;</span>
              )}
                <Button variant="success" size="sm" href="/logout">Log Out</Button>&nbsp;</h6>
                <br />
          </Col>
        </Row>

{store.users &&
        <Row>
          <Col>
          <Input icon='search' 
                  placeholder='Search Users...' 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  
                />
          </Col>
          <Col align="right">
          
          <button className="ui labeled icon button tiny"><i className="download icon"></i>
          
            <CSVLink data={csvData}>Download</CSVLink>
          
            </button>
          <button onClick={handlePrint} className="ui labeled icon button tiny"><i className="print icon"></i>Print</button>

      </Col>
          </Row>
}
        <Row>
          <Col>
            <div align="center">
              <br />
          </div>
          </Col>
        </Row>

      <Row>
        <Col xs={3}>
          <h4>User's Name</h4>
        </Col>
        <Col xs={2}>
        <h4>Date of Birth</h4>
        </Col>
        <Col xs={4}>
        <h4>Email Address</h4>
        </Col>
        <Col xs={1}>
        <h4>Role</h4>
        </Col>
        <Col xs={2} align="right">
        <h4>Actions</h4>
        </Col>
      </Row>
        <Row>
            <Col>
                <div align="center">
                    <br />
                    </div>
            </Col>
        </Row>
      <Row>
        <Col>


{store.users && store.users.length > 0 ? (
    
    store.users.filter((user) => {
      if (searchTerm === "") {
        console.log("empty");
        return user;
      } else if (user.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log("search term");
        return user;
      }
    }).map((user) => (
      <User user={user} key={user._id} />
    ))
  ) : (
    <div align="center" className="alert-text">No users found</div>
  )}
    
  
        </Col>
      </Row>
      <Row>
        <Col>
              &nbsp;
        </Col>
      </Row>
    </Container>
    </div>

  );  
}