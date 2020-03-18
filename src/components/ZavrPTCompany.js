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
              className="section-company-image d-md-block d-none" // only on md screem
              lg="6"
              md="12"
              style={{
                backgroundImage: "url(" + require("assets/img/04img.jpg") + ")"
              }}
            ></Col>
            <Col className=" pl-md-5" lg="6" md="12">
              <h2 className="section-company-title  text-center text-md-left ">
                Engineering Mind
              </h2>
              <p
                className="text-center text-md-left "
                style={{
                  fontStyle: "italic"
                  //fontWeight: "bold"
                  //textDecorationLine: "underline"
                }}
              >
                Ajudamos as empresas a transformar dados em resultados
              </p>
              <br />
              <p className="section-company-subtitle text-center text-md-left">
                Em nossa essência, somos uma empresa de análise e apresentaçãode
                de dados ao vivo. Ajudamos nossos clientes a melhorar o uso de
                sua informação para levá-los a decisões melhores e ter uma
                administração mais eficiente com soluções de software hospedadas
                na Nuvem sob medida.
              </p>
              <p className="section-company-color_title mt-4 text-center text-md-left">
                Análise de dados
              </p>
              <p className="section-company-subtitle text-center text-md-left">
                Obtenha informações, mitigue riscos e reduza custos com uma
                solução de banco de dados segura e confiável hospedada na Nube.
              </p>
              <p className="section-company-color_title mt-4 text-center text-md-left">
                Machine Learning
              </p>
              <p className="section-company-subtitle text-center text-md-left">
                Criação, treinamento e implementação de algoritmos de Machine
                Learning para identificar oportunidades lucrativas, riscos ou
                imprevistos em seus negócios.
              </p>
              <p className="section-company-color_title mt-4 text-center text-md-left">
                Desenvolvimento Web | App
              </p>
              <p className="section-company-subtitle text-center text-md-left">
                Inicie um aplicativo móvel ou na web, moderno e totalmente
                personalizado para interagir com seus clientes ou otimizar suas
                operações comerciais diárias.
              </p>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Company;
