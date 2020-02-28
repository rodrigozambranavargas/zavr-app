
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col} from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
    
      <div className="page-header section-dark" style={{ backgroundImage: "url(" + require("assets/img/zavr-index.gif") + ")" }} >
        <div className="bg-primary">
               
           <Container>
            <Row>
              <Col className="">
              <h1 className="text-left text-white">Cloud solutions</h1> 
              <p className=" text-left text-white">
              Zavr is a consulting firm experienced in applying cloud solutions and Machine Learning to business and industrial problems.            
              </p>
              <p className=" text-left text-white">    
              We specialize in Signal Processing for Finance, Manufacturing, Retail and IT industries. 
              </p>
              </Col>
              <Col className=""> </Col>
            </Row>
          </Container>
               
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
