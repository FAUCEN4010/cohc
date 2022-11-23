import propsStore from "../stores/propsStore";
import Prop from "./Prop";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Props() {
  const store = propsStore();
  console.log(store.user);

  return (
    <Container fluid>
        <Row>
          <Col>
          &nbsp;
          <br />
            <h2>My Property</h2>
          <br />
          </Col>
          <Col align="right">
            &nbsp;<br />
            <h6>Logged in as: 
              {store.user ? (
                <span>&nbsp;{store.user.fname} {store.user.lname} &nbsp;</span>
              ) : (
                <span>Guest</span>
              )}
                <Button variant="outline-success" size="sm" href="/logout">Log Out</Button>&nbsp;</h6>
          </Col>

        </Row>

      <Row>
        <Col>
          <h6>Item</h6>
        </Col>
        <Col>
        <h6>Value</h6>
        </Col>
        <Col>
        <h6>Date Aquired</h6>
        </Col>
        <Col>
          
        </Col>
        <Col>
          
        </Col>
      </Row>

      <Row>
        <Col>
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

  );  
}