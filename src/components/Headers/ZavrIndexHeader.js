
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div className="page-header section-dark" style={{ backgroundImage: "url(" + require("assets/img/zavr-index.gif") + ")" }} >
        <div>
          <Container>
            <div>              
              <h1 className="presentation-subtitle text-left">ZaVr</h1> 
              <h2 className="presentation-subtitle text-left">
              Consulting firm experienced in applying cloud solutions and
              Machine Learning to business and industrial problems.
            </h2>             
            </div>                                  
          </Container>  
            
          <Container>
            <Row>
            <Col>1 of 1</Col>
            </Row>
          </Container>
            
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
