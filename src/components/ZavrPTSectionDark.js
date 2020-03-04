import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title presentation-title">
                O parceiro de transformação digital que você procura
              </h2>
              <br />
              <br />
              <p className="presentation-subtitle description">
                Fornecendo o melhor em soluções escaláveis e específicas do
                setor baseadas na Nube.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
