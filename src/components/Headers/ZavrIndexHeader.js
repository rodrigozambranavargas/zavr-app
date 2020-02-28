import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/intro.gif") + ")"
        }}
      >
        <div className="filter" />

        <div className="content-center">
          <Container>
            <Row>
              <Col className="text-center">
                <div className="">
                  <h1 className="presentation-title text-left">
                    Cloud & Machine Learning Consulting
                  </h1>
                </div>
                <h2 className="presentation-subtitle text-left">
                  Engineer Mind is a Cloud Consulting firm experienced in
                  applying AI and Machine Learning to business problems. We
                  specialize in Natural Language Processing and Signal
                  Processing for Finance, Manufacturing, Retail, Healthcare and
                  IT industries
                </h2>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
