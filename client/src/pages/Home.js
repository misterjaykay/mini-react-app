import React, { useContext, useState } from "react";
import RecipeContext from "../utils/RecipeContext";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ListCard from "../components/Card/ListCard";
import API from "../utils/API";
import FormInput from "../components/Form/FormInput";
import FormButton from "../components/Form/FormButton";

function Home() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const titleText = {
    main: "Recipe List",
    subtitle:
      "Get All The Recipes From Here, or You Can Add Yours Favorite Recipes.",
  };
  const [string, setString] = useState("");
  const [newRecipe, setNewRecipe] = useState({
    recipe: "",
    ingredient: [],
    direction: [],
    category: [],
    cuisine: "",
  });

  const InputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    if (name === "recipe" || name === "cuisine") {
      setNewRecipe({
        ...newRecipe,
        [name]: value,
      });
    } else {
      setString(value);
    }
    // else {
    //   setNewRecipe({
    //     ...newRecipe,
    //     [name]: [...newRecipe[name], value],
    //   });
    // }
  };

  function handleAddInput(e) {
    e.preventDefault();
    const name = e.target.name;
    setNewRecipe({
      ...newRecipe,
      [name]: [...newRecipe[name], string],
    });

    const ingre = document.querySelector(`.${name}`);
    const input = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", name);
    input.setAttribute("name", `${name}`);
    input.setAttribute("placeholder", `Enter More ${name}`);
    ingre.appendChild(input);
    input.addEventListener("change", InputChange);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveRecipe(newRecipe)
      .then((res) => {
        console.log(res);
        API.getAllRecipes()
          .then((res) => {
            setRecipes(res.data);
            console.log(res);
          })
          .catch((err) => console.log(err));
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
                <FormInput
                  value="recipe"
                  size="md-6"
                  function={InputChange}
                  placeholder="Enter Your Recipe(Ex. Salmon Steak)"
                />

                <FormInput
                  value="ingredient"
                  size="md-5"
                  function={InputChange}
                  placeholder="Enter Ingredients Here(Ex. Scallion 100g)"
                />
                <FormButton
                  value="ingredient"
                  size="md-1"
                  function={handleAddInput}
                  text="Add"
                />

                <FormInput
                  value="direction"
                  size="md-5"
                  function={InputChange}
                  placeholder="Enter Directions Here"
                />
                <FormButton
                  value="direction"
                  size="md-1"
                  function={handleAddInput}
                  text="Add"
                />

                <FormInput
                  value="category"
                  size="md-5"
                  function={InputChange}
                  placeholder="Enter Recipe Categories Here(Ex. Lunch, Salad, Dessert)"
                />
                <FormButton
                  value="category"
                  size="md-1"
                  function={handleAddInput}
                  text="Add"
                />
                
                <FormInput
                  value="cuisine"
                  off="md-3"
                  size="md-6"
                  function={InputChange}
                  placeholder="Enter Cuisine Type Here(Ex. Korean, English, Italian)"
                />

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
          <ListCard array={recipes} />
        </Row>
      </Container>
    </>
  );
}

export default Home;
