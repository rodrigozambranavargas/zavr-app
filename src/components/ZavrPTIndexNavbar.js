import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// React Scroll
//import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor(""); //to change the color after navbar scrolldown, default withe
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container className="">
        <div className="navbar-translate">
          <NavbarBrand className=" pl-0 mt-0 pt-0 mb-0 pb-0 ">
            <Link
              className="navbar-brand pl-0"
              activeClass="active"
              to="ZavrPTHeader"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              data-placement="bottom"
              href=""
              target="_blank"
              title="ENGINEER MIND"
            >
              MIND ENGINEERING
            </Link>
          </NavbarBrand>

          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler ", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>

        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="ZavrPTCompany"
                spy={true}
                smooth={true}
                offset={-20}
                duration={700}
                data-target=".navbar-collapse.show"
                data-placement="bottom"
                href=""
                target="_blank"
                title="A ENGINEER MIND"
                onClick={toggleNavbarCollapse}
              >
                HOME
              </Link>
            </NavItem>

            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="ZavrPTServices"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                data-placement="bottom"
                href=""
                target="_blank"
                title="SOLUÇÕES"
                onClick={toggleNavbarCollapse}
              >
                SOLUÇÕES
              </Link>
            </NavItem>

            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="ZavrPTContactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                data-placement="bottom"
                href=""
                target="_blank"
                title="CONTATO"
                onClick={toggleNavbarCollapse}
              >
                CONTATO
              </Link>
            </NavItem>

            <NavItem>
              <NavLink
                href="/register-page"
                target="_blank"
                onClick={toggleNavbarCollapse}
              >
                <i className="nc-icon nc-single-02" /> LOG IN
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
