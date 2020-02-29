import React from "react";

// reactstrap components

// core components
import ZavrIndexNavbar from "components/ZavrIndexNavbar";
import ZavrIndexHeader from "components/ZavrIndexHeader.js";
import ZavrDemoFooter from "components/ZavrDemoFooter.js";

// index sections

import ZavrCompany from "components/ZavrCompany.js";
import ZavrSectionDark from "components/ZavrSectionDark.js";
import ZavrUseCases from "components/ZavrUseCases.js";

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
        <ZavrCompany />
        <ZavrSectionDark />
        <ZavrUseCases />
        <ZavrDemoFooter />
      </div>
    </>
  );
}

export default Index;
