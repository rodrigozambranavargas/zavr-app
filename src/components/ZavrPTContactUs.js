import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <div className="section-dark" id="ZavrPTContactUs">
        <Container>
          <div>
            <Row>
              <Col>
                <div className="section-dark">
                  <blockquote className="blockquote ">
                    <h3 className="title">Pronto quando estiveres</h3>
                    <p className="mb-0 ">
                      Informe-nos o que procura ou, se ainda não tiver certeza,
                      entraremos em contato com você com prazer e ajudaremos a
                      determinar onde uma de nossas soluções melhor beneficiará
                      seus negócios.
                    </p>
                    <br />
                    <div className="">
                      <h5 className="my-0">Contato</h5>
                      <br />
                      <a
                        href="https://github.com/rodrigozambranavargas"
                        target=""
                        class="link"
                        id="italic"
                      >
                        <p className="my-0">experience@engineermind.io</p>
                      </a>
                      <a
                        href="https://github.com/rodrigozambranavargas"
                        target=""
                        class="link"
                        id="italic"
                      >
                        <p className="my-0">+55 (11) 958232478)</p>
                      </a>
                      <br />
                      <p>R. Aimbêre Ɩ Santo André</p>
                      <p>São Paulo Ɩ Brazil</p>
                      <p>2020</p>
                      <br />
                    </div>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionTypography;
