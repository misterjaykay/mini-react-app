import React, { useContext, useState } from "react";
// import { Table } from "reactstrap";
import RecipeContext from "../utils/RecipeContext";
// import { Link } from "react-router-dom";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card/ListCard";
import API from "../utils/API";

function Home() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const [newRecipe, setNewRecipe] = useState({
    recipe: "",
    ingredient: [],
    direction: [],
    category: [],
    cuisine: "",
  });

  const titleText = {
    main: "Recipe List",
    subtitle:
      "Get All The Recipes From Here, or You Can Add Yours Favorite Recipes.",
  };

  const InputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    if (name === "recipe" || name === "cuisine") {
      setNewRecipe({
        ...newRecipe,
        [name]: value,
      });
    } else {
      setNewRecipe({
        ...newRecipe,
        [name]: [...newRecipe[name], value],
      });
    }
  };

  function handleAddInput(e) {
    e.preventDefault();

    const name = e.target.name;
    const ingre = document.querySelector(`.${name}`);
    const input = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", name);
    input.setAttribute("name", `${name}`);
    input.setAttribute("placeholder", `Enter More ${name}`);
    ingre.appendChild(input);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveRecipe(newRecipe)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Jumbotron title={titleText.main} subtitle={titleText.subtitle} />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="recipe">Recipe Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipe"
                    name="recipe"
                    onChange={InputChange}
                    placeholder="Enter Your Recipe(Ex. Salmon Steak)"
                  ></input>
                </div>

                <div className="form-group col-md-5 ingredient">
                  <label htmlFor="ingredient">Ingredient</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ingredient"
                    name="ingredient"
                    onChange={InputChange}
                    placeholder="Enter Ingredients Here(Ex. Scallion 100g)"
                  ></input>
                </div>
                {/* <div className="form-group col-md-5 ingredient">
                  <label htmlFor="ingredient">Ingredient</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ingredient"
                    name="ingredient"
                    onChange={InputChange}
                    placeholder="Enter Ingredients Here(Ex. Scallion 100g)"
                  ></input>
                </div> */}

                <div className="form-group col-md-1">
                  <button
                    onClick={handleAddInput}
                    name="ingredient"
                    type="button"
                    className="btn btn-primary mt-4"
                  >
                    add
                  </button>
                </div>
                <div className="form-group col-md-5 direction">
                  <label htmlFor="Direction">Direction</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direction"
                    name="direction"
                    onChange={InputChange}
                    placeholder="Enter Directions Here"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button
                    onClick={handleAddInput}
                    name="direction"
                    type="button"
                    className="btn btn-primary mt-4"
                  >
                    add
                  </button>
                </div>
                <div className="form-group col-md-5 category">
                  <label htmlFor="Category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    onChange={InputChange}
                    placeholder="Enter Recipe Categories Here(Ex. Lunch, Salad, Dessert)"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button
                    onClick={handleAddInput}
                    name="category"
                    type="button"
                    className="btn btn-primary mt-4"
                  >
                    add
                  </button>
                </div>
                <div className="form-group offset-md-3 col-md-6">
                  <label htmlFor="Cuisine">Cuisine</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cuisine"
                    name="cuisine"
                    onChange={InputChange}
                    placeholder="Enter Cuisine Type Here(Ex. Korean, English, Italian)"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-primary mt-3"
                  >
                    Submit Recipe
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Card array={recipes} />
        </Row>
      </Container>
    </>
  );
}

export default Home;
