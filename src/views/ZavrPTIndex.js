import React from "react";

// reactstrap components

// core components
import ZavrPTIndexNavbar from "components/ZavrPTIndexNavbar";
import ZavrPTIndexHeader from "components/ZavrPTIndexHeader.js";
import ZavrPTDemoFooter from "components/ZavrPTDemoFooter.js";

// index sections

import ZavrPTCompany from "components/ZavrPTCompany.js";
import ZavrPTSectionDark from "components/ZavrPTSectionDark.js";
import ZavrPTUseCases from "components/ZavrPTUseCases.js";

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
      <ZavrPTIndexNavbar />
      <ZavrPTIndexHeader />
      <div className="main">
        <ZavrPTCompany />
        <ZavrPTSectionDark />
        <ZavrPTUseCases />
        <ZavrPTDemoFooter />
      </div>
    </>
  );
}

export default Index;
