import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function NavSearch() {
  return (
    <Navbar bg="dark" expand="lg">

      <Container fluid>
        <Link to="/">
          <Button variant="outline-success">Home</Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavSearch;