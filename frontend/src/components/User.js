import adminStore from "../stores/adminStore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function User({ user }) {
  const store = adminStore((store) => {
    return { deleteUser: store.deleteUser, toggleUpdate: store.toggleUpdate };
  });

  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <div key={user._id}>{user.fname} {user.lname}</div>
        </Col>
        
        <Col xs={2}>
          <div>{new Date(user.dob).toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'})}</div>
        </Col>
        <Col xs={5}>
          <div>{user.email}</div>
        </Col>
        <Col xs={2} className="text-right">
        <Button variant="outline-primary"size="sm" onClick={() => store.toggleUpdate(user)}>Update</Button>
        &nbsp;&nbsp;
        <Button variant="outline-danger" size="sm" onClick={() => store.deleteUser(user._id)}>Delete</Button>
        </Col>
      </Row>
    </Container>
  );
  
}
