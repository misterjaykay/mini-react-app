import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DirCard from "../components/Card/DirCard";

function Result(props) {
  const {
    location: {
      data: {
        _id: id,
        category: [...cat],
        cuisine: cuisine,
        direction: [...dir],
        image: image,
        ingredient: [...ing],
        recipe: recipe,
      },
    },
  } = props;
  const titleText = {
    main: recipe,
    subtitle:
      "Get All The Recipes From Here, or You Can Add Yours Favorite Recipes.",
  };

  const [obj, setObj] = useState({
    id: "",
    category: [],
    cuisine: "",
    direction: [],
    image: "",
    ingredient: [],
    recipe: "",
  });

  useEffect(() => {
    setObj({
      ...obj,
      id: id,
      category: cat,
      cuisine: cuisine,
      direction: dir,
      image: image,
      ingredient: ing,
      recipe: recipe,
    });
  }, []);

  function routeChange() {
    props.history.push("/");
  }

  return (
    <>
      <Jumbotron title={titleText.main} subtitle={titleText.subtitle} />
      <Container>
        <Row>
          <Col size="md-6">
            <DirCard ingredient={obj.ingredient} />
          </Col>
          <Col size="md-6">
            <DirCard direction={obj.direction} />
          </Col>
          {/* <DirCard subSteps={subSteps} subRecipe={subRecipe} /> */}
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
        </Row>
        <Row>
          <Col size="md-1">
            <button onClick={routeChange}>Go Back</button>
          </Col>
          <Col size="md-11">
            <img src={image} alt={recipe} width="80%" height="80%" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Result;
