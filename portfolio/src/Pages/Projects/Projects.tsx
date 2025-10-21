import { Card, Col, Container, Row } from "react-bootstrap";
import './Projects.css'

export default function Projects() {
  return (
    <Container fluid className="py-5 px-3 px-md-4">
      <Row className="justify-content-center">
        <Col xs={12} lg={10} xl={9}>
          <div className="p-4 p-md-5 text-start">
            <h1 className="display-5 fw-bold mb-4">Projects</h1>

            <section className="mb-5">
              <Card className="project-card text-white">
                <Card.Img
                    src="https://placehold.co/800x400"     
                    alt="Card image"
                    style={{ height: 320, objectFit: "cover", width: "100%" }}
                />
                <div className="img-mask">
                    <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                        <div className="overlay-content">
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </div>
                </Card>                
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
