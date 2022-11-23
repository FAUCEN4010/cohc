import propsStore from "../stores/propsStore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Prop({ prop }) {
  const store = propsStore((store) => {
    return { deleteProp: store.deleteProp, toggleUpdate: store.toggleUpdate };
  });

  return (
    <Container fluid>
      <Row>
        <Col>
          <div key={prop._id}>{prop.item}</div>
        </Col>
        <Col>
          <div>${prop.dollarVal}.00</div>
        </Col>
        <Col>
          <div>{new Date(prop.dateAquired).toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'})}</div>
        </Col>
        <Col>
        <Button size="sm" onClick={() => store.toggleUpdate(prop)}>Update</Button>
        </Col>
        <Col>
        <Button size="sm" onClick={() => store.deleteProp(prop._id)}>Delete</Button>
        </Col>
      </Row>
    </Container>
  );
  
}
