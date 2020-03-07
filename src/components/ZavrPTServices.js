import React from "react";

// reactstrap components
import {
  Button,
  //NavItem,
  //NavLink,
  //Nav,
  //Pagination,
  //PaginationItem,
  //PaginationLink,
  //Progress,
  //TabContent,
  //TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionProgress() {
  /* const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }; */
  return (
    <>
      <div className=" section-dark section-nucleo-icons" id="ZavrPTServices">
        <Container>
          <Row>
            <Col className="" lg="6" md="12">
              {/*only on md screen "d-md-block d-none"*/}
              <div className="icons-container d-md-block d-none">
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
              <h2 className="title">
                Desenvolvimento <br />
                Web | App
              </h2>
              <br />
              <p className="presentation-subtitle description text-justify ">
                Inicie um aplicativo móvel ou na web, moderno e totalmente
                personalizado para interagir com seus clientes ou otimizar suas
                operações comerciais diárias.
              </p>
              <br />
              <Button
                className="btn-round ml-1"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                SAIBA MAIS
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
      <div className=" section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Análise de dados</h2>
              <br />
              <p className="presentation-subtitle description text-justify ">
                Obtenha informações, mitigue riscos e reduza custos com uma
                solução de banco de dados segura e confiável hospedada na Nube.
              </p>
              <br />
              <Button
                className="btn-round ml-1"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                SAIBA MAIS
              </Button>
            </Col>
            <Col lg="6" md="12">
              {/*only on md screen "d-md-block d-none"*/}
              <div className="icons-container d-md-block d-none">
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
          </Row>
        </Container>
      </div>{" "}
      <div className=" section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              {/*only on md screen "d-md-block d-none"*/}
              <div className="icons-container d-md-block d-none">
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
              <h2 className="title">Machine Learning</h2>
              <br />
              <p className="presentation-subtitle description text-justify">
                Criação, treinamento e implementação de algoritmos de Machine
                Learning para identificar oportunidades lucrativas, riscos ou
                imprevistos em seus negócios. <br /> <br />
                Engineer Mind. O caminho ideal para aproveitar ao máximo as
                tecnologias de machine learning
              </p>
              <br />
              <Button
                className="btn-round ml-1"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                SAIBA MAIS
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProgress;
