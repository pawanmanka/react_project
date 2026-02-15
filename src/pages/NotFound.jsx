import { Container, Button,Row, Col  } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import NotFoundImage from '/404.svg';
function NotFound() {
  return (
    <Container className="text-center mt-5">
      {/* <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>The page you are looking for does not exist.</p>
       */}
        <Row className="justify-content-center">
            <Image 
                src={NotFoundImage}
                alt="404 Not found"
                fluid
                 style={{ maxWidth: "600px" }}
                />
        </Row>
        <Row className="justify-content-center mt-5">
            <Col>
                <Button as={Link} to="/" variant="primary">
                    Go Back Home
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default NotFound;
