import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark0 "
        id="ZavrPTHeader"
        style={{
          backgroundImage: "url(" + require("assets/img/intro.gif") + ")"
        }}
      >
        <div className="filter" />

        <div className="content-center">
          <Container>
            <Row>
              <Col className="col-md-6 ">
                <div className="">
                  <h1 className="presentation-title text-left">
                    Soluções de dados baseadas na Nuvem
                  </h1>
                </div>
                <p className="presentation-subtitle text-left mt-4 text-justify">
                  Engineer Mind é uma empresa de consultoria com experiência na
                  aplicação de soluções baseadas na Nuvem a problemas
                  industriais e de negócios <br></br>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
