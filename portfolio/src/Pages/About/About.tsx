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
                I'm a full stack developer passionate about crafting intuitive and user-focused digital experiences. 
                With hands-on experience in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and <strong>PHP</strong>, I've worked on building reliable applications that balance performance, scalability, and usability. 
                I also enjoy designing scalable APIs and using Docker to improve consistency and speed throughout development and deployment processes.
                </p>
            </section>

            <section className="mb-5">
              <h2 className="h5 mb-3">Career</h2>
                <p className="mb-5">
                Over the years, I've transitioned from marketing and communication roles to full stack development, bringing a unique perspective to my work. 
                This diverse background allows me to approach projects with a holistic view, ensuring that both technical and user experience aspects are well-addressed.
                </p>
          
              <Row className="g-0 align-items-start mb-4">
                <Col xs="auto" className="text-muted me-4" style={{width: 170}}>
                  <span className="d-block">Oct 2023 - Now</span>
                </Col>
                <Col>
                  <h3 className="h5 mb-1">Full Stack Developer <span className="fw-normal">at Incapto</span></h3>
                  <p className="mb-2 text-muted">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </Col>
              </Row>

              <Row className="g-0 align-items-start mb-4">
                <Col xs="auto" className="text-muted me-4" style={{width: 170}}>
                  <span className="d-block">Feb 2020 - Oct 2023</span>
                </Col>
                <Col>
                  <h3 className="h5 mb-1">Marketing &amp; Communication <span className="fw-normal">at SomDocents</span></h3>
                  <p className="mb-2 text-muted">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </Col>
              </Row>

              <Row className="g-0 align-items-start">
                <Col xs="auto" className="text-muted me-4" style={{width: 170}}>
                  <span className="d-block">Sep 2019 - Feb 2020</span>
                </Col>
                <Col>
                  <h3 className="h5 mb-1">Marketing &amp; Design <span className="fw-normal">at Bimedica</span></h3>
                  <p className="mb-0 text-muted">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </Col>
              </Row>
            </section>

            <section className="mb-5">
              <h2 className="h5 mb-5">Education</h2>
          
              <Row className="g-0 align-items-start mb-4">
                <Col xs="auto" className="text-muted me-4" style={{width: 170}}>
                  <span className="d-block">Jan 2025</span>
                </Col>
                <Col>
                  <h3 className="h5 mb-1">Intensive TypeScript course <span className="fw-normal">at The Refactor Project</span></h3>
                  <p className="mb-2 text-muted">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </Col>
              </Row>

              <Row className="g-0 align-items-start mb-4">
                <Col xs="auto" className="text-muted me-4" style={{width: 170}}>
                  <span className="d-block">Nov 2022 - Jun 2023</span>
                </Col>
                <Col>
                  <h3 className="h5 mb-1">Master's degree in Full Stack Development <span className="fw-normal">at UNIR</span></h3>
                  <p className="mb-2 text-muted">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </Col>
              </Row>

              <Row className="g-0 align-items-start mb-4">
                <Col xs="auto" className="text-muted me-4" style={{width: 170}}>
                  <span className="d-block">Sep 2013 - Jun 2017</span>
                </Col>
                <Col>
                  <h3 className="h5 mb-1">Bachelor's Degree in Communication and Cultural Industries <span className="fw-normal">at UB</span></h3>
                  <p className="mb-0 text-muted">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </Col>
              </Row>
            </section>
            <section className="languages">
              <h2 className="h5 mb-3">Languages</h2>
              <Row className="g-0 align-items-start mb-4">
                  <Col>
                    <span>Spanish: Native</span>
                  </Col>
                  <Col>
                    <span>English: Advanced</span>
                  </Col>
                  <Col>
                    <span>Catalan: Native</span>
                  </Col>
              </Row>
            </section>
            <section className="skills mt-4">
              <h2 className="h5 mb-3">Skills</h2>
              <Row>
                  <Col>
                    <span>React</span>
                  </Col>
                  <Col>
                    <span>TypeScript</span>
                  </Col>
                  <Col>
                    <span>Next.js</span>
                  </Col>
                  <Col>
                    <span>Node.js</span>
                  </Col>
                  <Col>
                    <span>Express.js</span>
                  </Col>
                  <Col>
                    <span>PHP</span>
                  </Col>
                   <Col>
                    <span>HTML</span>
                  </Col>
                   <Col>
                    <span>CSS</span>
                  </Col>
                   <Col>
                    <span>JavaScript</span>
                  </Col>
                   <Col>
                    <span>OOP</span>
                  </Col>
                   <Col>
                    <span>Docker</span>
                  </Col>
                   <Col>
                    <span>Agile</span>
                  </Col>

                  {/* React -TypeScript -Node.js -PHP -HTML - CSS - JavaScript -Express.js -Next.js -OOP -Docker -Agile */}
              </Row>
            </section>
          </div>
          <section className="strengths mt-4">
              <h2 className="h5 mb-3">Strengths</h2>
              <Row className="g-0 align-items-start mb-4">
                  <Col>
                    <span>Product-oriented engineering</span>
                  </Col>
                  <Col>
                    <span>Clear communication</span>
                  </Col>
                  <Col>
                    <span>Scale delivery mindset</span>
                  </Col>
              </Row>
            </section>
        </Col>
      </Row>
    </Container>
  );
}
