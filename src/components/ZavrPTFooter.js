import React from "react";

// reactstrap components
import { Row, Container, Col, Button } from "reactstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-scroll";

function ZavarPTFooter() {
  return (
    <>
      <div className="section-footer" id="ZavrPTFooter">
        <Container>
          <Row>
            <Col className="text-center text-md-right pb-5">
              <h1 className="section-footer-subtitle2  text-center text-md-left ">
                Entre em contato conosco:
              </h1>
              <Form className="pt-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Nome" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Empresa" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control as="textarea" rows="4" placeholder="Mensagem" />
                </Form.Group>

                <Button
                  className="btn-round "
                  color="info"
                  outline
                  variant="primary"
                  type="submit"
                >
                  Enviar
                </Button>
              </Form>
            </Col>
            <Col className=" pl-md-5" lg="6" md="12">
              <h1 className="section-footer-subtitle2 text-center text-md-left ">
                Nossos canais
              </h1>

              <br />
              <p className="section-footer-subtitle text-center text-md-left mb-4">
                Descubra o que a Engineering Mind pode fazer por você. Informe
                seu email e nós entraremos em contato.
              </p>
              <p
                className="section-footer-subtitle text-md-left text-center"
                style={{
                  //fontStyle: "italic",
                  fontWeight: "bold",
                  //textDecorationLine: "underline"
                }}
              >
                Contato:
              </p>
              <p
                className="section-footer-subtitle mb-3 text-md-left text-center"
                style={
                  {
                    //fontStyle: "italic",
                    //fontWeight: "bold",
                    //textDecorationLine: "underline"
                  }
                }
              >
                engineermind@engmind.com
              </p>
              <p
                className="section-footer-subtitle text-md-left text-center"
                style={{
                  //fontStyle: "italic",
                  fontWeight: "bold",
                  //textDecorationLine: "underline"
                }}
              >
                Sao Paulo
              </p>
              <p
                className="section-footer-subtitle text-md-left text-center"
                style={
                  {
                    //fontStyle: "italic",
                    //fontWeight: "bold",
                    //textDecorationLine: "underline"
                  }
                }
              >
                Rua Aimbere, 320 <br></br>
                Santo Ándre - SP <br></br>
                +55 (11) 958232478
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ZavarPTFooter;
