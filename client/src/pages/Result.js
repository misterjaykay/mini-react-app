import React, { useContext, useEffect, useState } from "react";
import RecipeContext from "../utils/RecipeContext";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import IngCard from "../components/Card/IngCard";
import DirCard from '../components/Card/DirCard';

function Result(props) {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const { location } = props;
  const [ingred, setIngred] = useState([]);
  const [subIngred, setSubIngred] = useState([]);
  const [subRecipe, setSubRecipe] = useState("");
  const [steps, setSteps] = useState([]);
  const [subSteps, setSubSteps] = useState([]);
  const titleText = {
    main: location.data.name,
    subtitle: "Get All The Recipes From Here, or You Can Add Yours Favorite Recipes."
  }

  useEffect(() => {
    async function setState() {
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      setIngred(location.data.ingred);
      setSteps(location.data.steps);
      if (location.data.sub_recipe !== undefined) {
        setSubRecipe(location.data.sub_recipe);
        setSubIngred(location.data.sub_ingred);
        if (location.data.sub_steps !== undefined) {
          setSubSteps(location.data.sub_steps);
        }
      }
    }
    setState();
  },[]);

  function routeChange() {
    props.history.push("/");
  }

  return (
    <>
      <Jumbotron
        title={titleText.main}
        subtitle={titleText.subtitle}
      />
      <Container>
        <Row>
          <Col size="md-6">
            <IngCard ingred={ingred} />
          </Col>
          <Col size="md-6">
            <IngCard subIngred={subIngred} subRecipe={subRecipe} />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <DirCard steps={steps}/>
            {/* <h4>Directions</h4>
            <ol>
              {location.data.steps.map((step) => (
                <li>{step}</li>
              ))}
            </ol> */}
          </Col>
          <Col size="md-6">
            <DirCard subSteps={subSteps} subRecipe={subRecipe} />
            {/* {location.data.sub_steps !== undefined ? (
              <>
                <h4>{location.data.sub_recipe} Directions</h4>
                <ol>
                  {location.data.sub_steps.map((step) => (
                    <li>{step}</li>
                  ))}
                </ol>
              </>
            ) : (
              <div></div>
            )} */}
          </Col>
        </Row>
        <Row>
          <Col size="md-1">
            <button onClick={routeChange}>Go Back</button>
          </Col>
          <Col size="md-11">
            <img
              src={location.data.image}
              alt={location.data.name}
              width="100%"
              height="100%"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Result;
