import React, { useContext, useEffect, useState } from "react";
import RecipeContext from "../utils/RecipeContext";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ArticleCard from "../components/Card/ArticleCard";

function Result(props) {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const { location } = props;
  const [ingred, setIngred] = useState([]);
  const [subIngred, setSubIngred] = useState([]);
  const [subRecipe, setSubRecipe] = useState("");

  useEffect(() => {
    async function setState() {
      await new Promise((resolve, reject) => setTimeout(resolve, 700));
      setIngred(location.data.ingred);
      if (location.data.sub_recipe !== undefined) {
        setSubRecipe(location.data.sub_recipe);
        setSubIngred(location.data.sub_ingred);
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
        title={location.data.name}
        subtitle={"Get All The Recipes Here"}
      />
      <Container>
        <Row>
          <Col size="md-6">
            <ArticleCard ingred={ingred} />
          </Col>
          <Col size="md-6">
            <ArticleCard subIngred={subIngred} subRecipe={subRecipe} />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h4>Directions</h4>
            <ol>
              {location.data.steps.map((step) => (
                <li>{step}</li>
              ))}
            </ol>
          </Col>
          <Col size="md-6">
            {location.data.sub_steps !== undefined ? (
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
            )}
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
