import React from "react";

// reactstrap components

// core components
import ZavrPTIndexNavbar from "components/ZavrPTIndexNavbar";
import ZavrPTIndexHeader from "components/ZavrPTIndexHeader.js";
import ZavrPTDemoFooter from "components/ZavrPTDemoFooter.js";

// index sections
import ZavrPTCompany from "components/ZavrPTCompany.js";
import ZavrPTMiddleSection from "components/ZavrPTMiddleSection.js";
import ZavrPTServices from "components/ZavrPTServices.js";
import ZavrPTContactUs from "components/ZavrPTContactUs.js";

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
      <ZavrPTCompany />
      <ZavrPTMiddleSection />
      <ZavrPTContactUs />
      {/*     <div className="main">
        <ZavrPTCompany />
        <ZavrPTMiddleSection />
        <ZavrPTServices />
        <ZavrPTContactUs />
        <ZavrPTDemoFooter />
      </div> */}
    </>
  );
}

export default Index;
