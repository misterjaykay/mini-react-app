import React, { useContext } from "react";
// import { Table } from "reactstrap";
import RecipeContext from "../utils/RecipeContext";
// import { Link } from "react-router-dom";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card/ListCard";

function Home() {
  const { recipes, setRecipes } = useContext(RecipeContext);

  const InputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
  };

  return (
    <>
      <Jumbotron title={"Recipe List"} subtitle={"Get All The Recipes From Here, or You Can Add Yours Favorite Recipes."} />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="recipe">Recipe Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipe"
                    placeholder="Enter Your Recipe(Ex. Salmon Steak)"
                  ></input>
                </div>
                <div className="form-group col-md-5">
                  <label for="ingredient">Ingredient</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ingredient"
                    placeholder="Enter Ingredients Here(Ex. Scallion 100g)"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button type="button" className="btn btn-primary mt-4">add</button>
                </div>
                <div className="form-group col-md-5">
                  <label for="Direction">Direction</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Direction"
                    placeholder="Enter Directions Here"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button type="button" className="btn btn-primary mt-4">add</button>
                </div>
                <div className="form-group col-md-5">
                  <label for="Cuisine">Cuisine</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Cuisine"
                    placeholder="Enter Cuisine Type Here(Ex. Korean, English, Italian)"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button type="button" className="btn btn-primary mt-4">add</button>
                </div>
                <div className="form-group offset-md-3 col-md-6">
                  <label for="Category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Category"
                    placeholder="Enter Recipe Categories Here(Ex. Lunch, Salad, Dessert)"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button type="submit" className="btn btn-primary mt-3">
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
