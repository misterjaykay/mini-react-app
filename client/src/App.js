import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import RecipeContext from "./utils/RecipeContext";
import API from "./utils/API";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    onLoad();
  },[]);

  function onLoad() {
    API.getAllRecipes()
    .then((res) => {
      console.log(res.data);
      setRecipes(res.data);
    })
    .catch((err) => console.log(err));
  }

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </div>
      </Router>
    </RecipeContext.Provider>
  );
}

export default App;
