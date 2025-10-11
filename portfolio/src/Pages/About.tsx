import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col>
          <div className="p-4 p-md-5 text-start">
            <h1 className="display-5 fw-bold mb-4">About</h1>

            <section className="mb-5">
              <h2 className="h5 mb-3">Me</h2>
                <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum              
                </p>
            </section>

            <section>
              <h2 className="h5 mb-3">Career</h2>
                <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum              
                </p>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
