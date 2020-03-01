import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionProgress() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className=" section section-dark ">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Desenvolvimento <br />
                        Web |App
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Análise <br />
                        de dados
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Machine <br />
                        Learning
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                    Inicie um aplicativo móvel ou na web, moderno e totalmente
                    personalizado para interagir com seus clientes ou otimizar
                    suas operações comerciais diárias.
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>
                    Obtenha informações, mitigue riscos e reduza custos com uma
                    solução de banco de dados segura e confiável hospedada na
                    Nube.
                  </p>
                </TabPane>
                <TabPane tabId="3">
                  <p>
                    Criação, treinamento e implementação de algoritmos de
                    Machine Learning para identificar oportunidades lucrativas,
                    riscos ou imprevistos em seus negócios.
                  </p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProgress;
