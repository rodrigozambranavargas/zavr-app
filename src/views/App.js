import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Pages
import ZavrPTIndex from "views/ZavrPTIndex.js";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/indexPT"
              render={(props) => <ZavrPTIndex {...props} />}
            />
            {/* <Route
                exact
                path="/LogIn"
                render={(props) => <LogIn {...props} auth={authProps} />}
              /> */}
            <Redirect to="/indexPT" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
