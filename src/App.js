import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import KeywordContext from "./utils/KeywordContext";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <KeywordContext.Provider value={{ keyword, setKeyword }}>
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </div>
      </Router>
    </KeywordContext.Provider>
  );
}

export default App;
