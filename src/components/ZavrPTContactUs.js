import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <div className="section-dark">
        <Container className="tim-container">
          <div id="typography ">
            <Row>
              <Col>
                <div className="typography-line section-dark">
                  <blockquote className="blockquote ">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <br />
                    <footer className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="source Title">Source Title</cite>
                    </footer>
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
