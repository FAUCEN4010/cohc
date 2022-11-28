import propsStore from "../stores/propsStore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Base64Downloader from 'react-base64-downloader';

export default function Prop({ prop }) {
  const store = propsStore((store) => {
    return { deleteProp: store.deleteProp, toggleUpdate: store.toggleUpdate };
  });

  const base64 = prop.uploadFile;
  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <div key={prop._id}>{prop.item}</div>
        </Col>
        <Col xs={2}>
          <div>${prop.dollarVal}.00</div>
        </Col>
        <Col xs={2}>
          <div>{new Date(prop.dateAquired).toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'})}</div>
        </Col>
        <Col xs={3}>
          {prop.uploadFile ? (

            <div>
              <Base64Downloader base64={base64} Tag="a" extraAttributes={{ href: '#' }}>File Uploaded</Base64Downloader>
            </div>
              
          ) : (
            <div>No File Uploaded</div>
          )}
        </Col>
        <Col xs={2} className="text-right">
        <Button variant="outline-primary"size="sm" onClick={() => store.toggleUpdate(prop)}>Update</Button>
        &nbsp;&nbsp;
        <Button variant="outline-danger" size="sm" onClick={() => store.deleteProp(prop._id)}>Delete</Button>
        </Col>
      </Row>
      <Row>
        <Col>
            <div  style={{ padding: 4 }}></div>
        </Col>
      </Row>
    </Container>
  );
  
}
