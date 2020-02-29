import React from "react";

// reactstrap components

// core components
import ZavrIndexNavbar from "components/Navbars/ZavrIndexNavbar";
import ZavrIndexHeader from "components/Headers/ZavrIndexHeader.js";
import ZavrDemoFooter from "components/Footers/ZavrDemoFooter.js";

// index sections

import ZavrCompany from "components/Body/ZavrCompany.js";
import ZavrSectionDark from "components/Body/ZavrSectionDark.js";
import ZavrUseCases from "components/Body/ZavrUseCases.js";

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
