import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Company() {
  return (
    <>
      <div className="section-company" id="ZavrPTCompany">
        <Container>
          <Row>
            <Col
              className="d-md-block d-none" // only on md screem
              lg="6"
              md="12"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/daniel-olahs.jpg") + ")"
              }}
            ></Col>
            <Col lg="6" md="12">
              <h2 className="section-company-title  text-center text-md-left mb-3">
                Engineer Mind
              </h2>
              <br />
              <p className="section-company-subtitle  text-justify">
                Em nossa essência, somos uma empresa de análise de dados e
                Machine Learning (ML). Ajudamos nossos clientes a melhorar o uso
                de seus dados para levá-los a decisões melhores e ter uma
                administração mais eficiente com soluções de software hospedadas
                na Nube sob medida. <br />
                <br />
                Nossa equipe ajudara você a decidir a melhor solução para sua
                empresa, aplicando a tecnologia de AWS para criar e hospedar
                nossas soluções em todo o mundo, cuidaremos de todo o seu
                projeto, desde a preparação dos dados até a implantação
                escalável da produção.
              </p>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Company;
