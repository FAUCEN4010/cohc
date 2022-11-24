import propsStore from "../stores/propsStore";
import Prop from "./Prop";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import {Input} from 'semantic-ui-react'


export default function Props() {
  const store = propsStore();
  console.log("store.props = " + store.props);

  // start new stuff
    const [APIData, setAPIData] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        axios.get(`/props`)
            .then((response) => {
                setAPIData(response.data);
                console.log("APIData:" + response.data);
            })
    }, [])



    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(APIData)
        }
    }
 

  return (

    <div style={{ padding: 20 }}>

        <div align="right">
        <Input icon='search' 
            placeholder='Search...' 
            onChange="{(e) => searchItems(e.target.value)}"
        />
        </div>
        
            {searchInput.length < 1
            ? (
                filteredResults.map((props) => {
                    return (
                        {props}
                    )
                })
            ) 
            : (
                APIData.map((prop) => {
                    return (
                        {prop}
                    )
                })
            )}



    




    <Container fluid>
        <Row>
          <Col>
          
            <h2>My Property</h2>
          </Col>

          <Col align="right">
            &nbsp;<br />
            <h6>Logged in as: 
              {store.user ? (
                <span>&nbsp;{store.user.fname} {store.user.lname} &nbsp;</span>
              ) : (
                <span>Guest</span>
              )}
                <Button variant="success" size="sm" href="/logout">Log Out</Button>&nbsp;</h6>
          </Col>

        </Row>

        <Row>
          <Col>
            <div align="center">
              {/* <SearchBar props={propsSearch} setPropsSearchResults={setPropsSearchResults} /> */}
              
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
        {/* {content} */}
          {store.props &&
              store.props.map((prop) => {
                return <Prop prop={prop} key={prop._id} />;
              })}
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