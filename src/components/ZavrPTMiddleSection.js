import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function MiddleSection() {
  return (
    <>
      <div className="section-middle">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="section-middle-title">
                O parceiro de transformação digital que você procura
              </h2>
              <p
                className="section-middle-subtitle mt-3"
                style={{
                  fontStyle: "italic"
                  //fontWeight: "bold"
                  //textDecorationLine: "underline"
                }}
              >
                Fornecendo o melhor em soluções escaláveis e específicas do
                setor baseadas na Nuvem.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MiddleSection;
