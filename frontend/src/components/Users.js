import React from 'react'
import adminStore from '../stores/adminStore'
import { useState, useEffect } from "react";
import {Input} from 'semantic-ui-react'
import User from './User'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Admin () {
    const store = adminStore();
    const [searchTerm, setSearchTerm] = useState("");
    console.log(store.users);

  return (
    <div style={{ padding: 20 }}>
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

                <Input icon='search' 
                  placeholder='Search Users...' 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onBlur={(e) => setSearchTerm("")}
                />
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
        <Col xs={3}>
          <h4>User's Name</h4>
        </Col>
        <Col xs={2}>
        <h4>Date of Birth</h4>
        </Col>
        <Col xs={5}>
        <h4>Email Address</h4>
        </Col>
        <Col xs={2}>
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


{store.users &&
    
    store.users.filter((user) => {
      if (searchTerm == "") {
        console.log("empty");
        return user;
      } else if (user.item.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log("search term");
        return user;
      }
    }).map((user) => (
      console.log("map"),
      <User user={user} key={user._id} />
    ))}
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