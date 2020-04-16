import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";

// core components

function MiddleSection() {
  return (
    <>
      <div className="section-middle" id="ZavrPTMiddleSection">
        <Container>
          <Row className="pb-md-5">
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="section-middle-title">
                O parceiro de transformação digital que você procura
              </h2>
              <p
                className="section-middle-subtitle mt-3"
                style={{
                  fontStyle: "italic",
                  //fontWeight: "bold"
                  //textDecorationLine: "underline"
                }}
              >
                Fornecendo o melhor em soluções escaláveis e específicas do
                setor baseadas na Nuvem.
              </p>
            </Col>
          </Row>

          <Row className="pt-md-5">
            <CardDeck>
              <Card
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/02img.jpg") + ")",
                }}
              >
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text className="section-middle-subtitle">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a wider card with supporting text
                    below as a natural lead-in to additional content. This
                    content is a little bit longer. This is a wider card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/04img.jpg") + ")",
                }}
              >
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text className="section-middle-subtitle">
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/02img.jpg") + ")",
                }}
              >
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text className="section-middle-subtitle">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MiddleSection;
