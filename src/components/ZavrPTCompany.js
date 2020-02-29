import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Company() {
  return (
    <>
      <div className=" section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Engineer Mind</h2>
              <br />
              <p className="description text-justify">
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
