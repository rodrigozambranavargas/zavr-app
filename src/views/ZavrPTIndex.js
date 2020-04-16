import React from "react";

// reactstrap components

// core components
import ZavrPTIndexNavbar from "components/ZavrPTIndexNavbar";
import ZavrPTIndexHeader from "components/ZavrPTIndexHeader.js";
import ZavrPTFooter from "components/ZavrPTFooter.js";

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
      <ZavrPTFooter />
      {/*  <ZavrPTMiddleSection />
      <ZavrPTContactUs /> */}
    </>
  );
}

export default Index;
