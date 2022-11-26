import propsStore from "../stores/propsStore";
import Prop from "./Prop";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useRef } from "react";
import {Input} from 'semantic-ui-react'
import {CSVLink} from 'react-csv';
import {useReactToPrint} from 'react-to-print';


export default function Props() {
  const store = propsStore();

  // for printing the
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // for CSV download
  const csvData = store.props

  // useState for search
  const [searchTerm, setSearchTerm] = useState("");

  return (

    <div style={{ padding: 20 }} ref={componentRef}>
    <Container fluid>
        <Row>
          <Col>
          
            <h2>My Property</h2>
          </Col>

          <Col align="right">

            <h6>Logged in as: 
              {store.user ? (
                <span>&nbsp;{store.user.fname} {store.user.lname} &nbsp;</span>
              ) : (
                <span>Guest</span>
              )}
                <Button variant="success" size="sm" href="/logout">Log Out</Button>&nbsp;</h6>
                <br />
      
                
          </Col>
        </Row>
        <Row>
          <Col>
          <Input icon='search' 
                  placeholder='Search Property...' 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onBlur={(e) => setSearchTerm("")}
                />
          </Col>
          <Col align="right">
          
                <button className="ui labeled icon button tiny"><i className="download icon"></i>
                {store.props &&
                  <CSVLink data={csvData}>Download</CSVLink>
                }
                  </button>
                <button onClick={handlePrint} className="ui labeled icon button tiny"><i className="print icon"></i>Print</button>

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
        <Col xs={4}>
          <h4>Item</h4>
        </Col>
        <Col xs={2}>
        <h4>Value</h4>
        </Col>
        <Col xs={4}>
        <h4>Date Aquired</h4>
        </Col>
        <Col xs={2}>
        <h4 className="text-center">Actions</h4>
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
        
        {store.props &&
    
    store.props.filter((prop) => {
      if (searchTerm === "") {
        console.log("search empty");
        return prop;
      } else if (prop.item.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log("search term");
        return prop;
      }
    }).map((prop) => (
      <Prop prop={prop} key={prop._id} />
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