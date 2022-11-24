import propsStore from "../stores/propsStore";
import Prop from "./Prop";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import { Card, Input } from 'semantic-ui-react'


export default function Props() {
  const store = propsStore();
  console.log(store.props);

  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
      axios.get(`/props`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])
  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = APIData.filter((prop) => {
            return Object.values(prop).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(APIData)
    }
}

return (
  <div style={{ padding: 20 }}>
      <Input icon='search'
          placeholder='Search...'
          onChange={(e) => searchItems(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((prop) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{prop.item}</Card.Header>
                                    <Card.Description>
                                        {prop.value}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((prop) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{prop.item}</Card.Header>
                                    <Card.Description>
                                        {prop.value}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
    )
}

  // start new stuff
  // const [propsSearch, setPropsSearch] = useState([]);
  // const [propsSearchResults, setPropsSearchResults] = useState([]);
  // const results = propsSearchResults.map(prop => <Prop key={prop._id} prop={prop} />) 
  
  // const content = results?.length ? results : <p>No results found</p>


  // useEffect(() => {
  //   store.fetchProps().then(json => {
  //     setPropsSearch(json);
  //     return json;
  //   }).then(json => {
  //     setPropsSearchResults(json);
  //   }); 
  // }, []);
// end new stuff
  

  // return (
  //   <Container fluid>
  //       <Row>
  //         <Col>
  //         &nbsp;
  //         <br />
  //           <h2>My Property</h2>
  //         </Col>

  //         <Col align="right">
  //           &nbsp;<br />
  //           <h6>Logged in as: 
  //             {store.user ? (
  //               <span>&nbsp;{store.user.fname} {store.user.lname} &nbsp;</span>
  //             ) : (
  //               <span>Guest</span>
  //             )}
  //               <Button variant="outline-success" size="sm" href="/logout">Log Out</Button>&nbsp;</h6>
  //         </Col>

  //       </Row>

  //       <Row>
  //         <Col>
  //           <div align="center">
  //             {/* <SearchBar props={propsSearch} setPropsSearchResults={setPropsSearchResults} /> */}
              
  //             <br />
  //         </div>
  //         </Col>
  //       </Row>

  //     <Row>
  //       <Col xs={4}>
  //         <h6>Item</h6>
  //       </Col>
  //       <Col xs={2}>
  //       <h6>Value</h6>
  //       </Col>
  //       <Col xs={4}>
  //       <h6>Date Aquired</h6>
  //       </Col>
  //       <Col xs={2}>
  //       <h6 className="text-center">Actions</h6>
  //       </Col>
  //     </Row>

  //     <Row>
  //       <Col>
  //       {/* {content} */}
  //         {store.props &&
  //             store.props.map((prop) => {
  //               return <Prop prop={prop} key={prop._id} />;
  //             })}
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //             &nbsp;
  //       </Col>
  //     </Row>
  //   </Container>

//   );  
// }