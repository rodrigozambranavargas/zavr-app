import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components
//import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-gray"
        id="ZavrPTHeader"
        /*  style={{
          backgroundImage: "url(" + require("assets/img/intro.gif") + ")"
        }} */
      >
        {/* <div className="filter" /> */}
        <div className="content-center">
          <Container>
            <Row className="pt-5">
              <Col className="col-md-7 text-center text-md-left">
                <div>
                  <h1 className="page-header-title text-center text-md-left ">
                    Ajudamos você a transformar dados em resultados
                  </h1>
                </div>
                <p className="page-header-subtitle  mt-4 text-center text-md-left">
                  Engineer Mind é uma empresa de consultoria com experiência na
                  aplicação de soluções baseadas na Nuvem a problemas
                  industriais e de negócios <br></br>
                </p>
                <br />
                <Link
                  className="nav-link pl-0"
                  activeClass="active"
                  to="ZavrPTCompany"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={700}
                >
                  <Button
                    className="btn-round"
                    color="info"
                    outline
                    target="_blank"
                    title="SAIBA MAIS"
                  >
                    SAIBA MAIS
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
