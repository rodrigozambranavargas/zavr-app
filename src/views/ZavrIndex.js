import React from "react";

// reactstrap components

// core components
import ZavrIndexNavbar from "components/Navbars/ZavrIndexNavbar";
import ZavrIndexHeader from "components/Headers/ZavrIndexHeader.js";
import ZavrCompany from "components/Body/ZavrCompany.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections

import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <ZavrIndexNavbar />
      <ZavrIndexHeader />
      <div className="main">
        <SectionNucleoIcons />
        <ZavrCompany />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />

        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
