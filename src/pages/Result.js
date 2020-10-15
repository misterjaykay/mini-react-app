import React, { useContext, useState } from "react";
import RecipeContext from "../utils/RecipeContext";
import { Col, Container, Row } from "../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

function Result(props) {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const { location } = props;
  const [data, setData] = useState();
  return (
    <>
      <Jumbotron
        title={location.data.name}
        subtitle={"Get All The Recipes Here"}
      />
      <Container>
        <Row>
          <Col size="md-12">
            <Link to="/">
              <button>Go Back</button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h4>Ingredients</h4>
            <ul>
              {location.data.ingred.map((ing) => (
                <li>{ing}</li>
              ))}
            </ul>
          </Col>
          <Col size="md-6">
            {location.data.sub_recipe !== undefined ? (
              <>
                <h4>{location.data.sub_recipe}</h4>
                <ul>
                  {location.data.sub_ingred.map((sub) => (
                    <li>{sub}</li>
                  ))}
                </ul>
              </>
            ) : (
              <div></div>
            )}
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
      </Container>
    </>
  );
}

export default Result;
