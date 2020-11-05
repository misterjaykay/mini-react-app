import React, { useContext, useState } from "react";
import RecipeContext from "../utils/RecipeContext";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ListCard from "../components/Card/ListCard";
import API from "../utils/API";
import FormInput from "../components/Form/FormInput";
import FormButton from "../components/Form/FormButton";
import { Alert } from "@material-ui/lab";
import Navbar from "../components/Navbar";

function Home() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const titleText = {
    main: "Recipe List",
    subtitle:
      "Get All The Recipes From Here, or You Can Add Yours Favorite Recipes.",
  };
  const [string, setString] = useState("");
  const [success, setSuccess] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    recipe: "",
    ingredient: [],
    direction: [],
    category: [],
    cuisine: "",
  });
  const [error, setError] = useState({
    recipe: "",
    ingredient: "",
    direction: "",
    category: "",
    cuisine: "",
  });

  const InputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setString(value);
    // if (name === "recipe" || name === "cuisine") {
    //   setNewRecipe({
    //     ...newRecipe,
    //     [name]: value,
    //   });
    // } else {
    //   setString(value);
    // }
    // else {
    //   setNewRecipe({
    //     ...newRecipe,
    //     [name]: [...newRecipe[name], value],
    //   });
    // }
  };

  function handleAddRecipe(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "recipe" || name === "cuisine") {
      setNewRecipe({
        ...newRecipe,
        [name]: string,
      });
      // const inputField = document.querySelector(`#${name}`);
    } else {
      setNewRecipe({
        ...newRecipe,
        [name]: [...newRecipe[name], string],
      });
    }
    const inputField = document.getElementById(`${name}`);
    inputField.value = "";
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (newRecipe.recipe === "") {
      setError({
        ...error,
        recipe: "You do not have title of this recipe.",
      });
      await new Promise((resolve, reject) => setTimeout(resolve, 1500));
      setError({ ...error, recipe: "" });
    } else if (newRecipe.ingredient.length === 0) {
      setError({
        ...error,
        ingredient: "You do not have any ingredient for this recipe.",
      });
      await new Promise((resolve, reject) => setTimeout(resolve, 1500));
      setError({ ...error, ingredient: "" });
    } else if (newRecipe.direction.length === 0) {
      setError({
        ...error,
        direction: "You do not have any directions for this recipe.",
      });
      await new Promise((resolve, reject) => setTimeout(resolve, 1500));
      setError({ ...error, direction: "" });
    } else if (newRecipe.category.length === 0) {
      setError({
        ...error,
        category: "You do not have any categories for this recipe.",
      });
      await new Promise((resolve, reject) => setTimeout(resolve, 1500));
      setError({ ...error, category: "" });
    } else if (newRecipe.cuisine === "") {
      setError({
        ...error,
        cuisine: "You did not set cuisine for this recipe.",
      });
      await new Promise((resolve, reject) => setTimeout(resolve, 1500));
      setError({ ...error, cuisine: "" });
    } else {
      API.saveRecipe(newRecipe)
        .then(async (res) => {
          console.log(res);
          if (res.status === 200) {
            setSuccess(true);
            await new Promise((resolve, reject) => setTimeout(resolve, 1500));
            setNewRecipe({
              ...newRecipe,
              recipe: "",
              ingredient: [],
              direction: [],
              category: [],
              cuisine: ""
            })
            setSuccess(false);
          }
          API.getAllRecipes()
            .then((res) => {
              setRecipes(res.data);
              // console.log(res);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <Jumbotron title={titleText.main} subtitle={titleText.subtitle} />
      <Navbar />
      <Container>
        <Row>
          <Col size="md-12">
            {success === true ? (
              <Alert severity="success">Successfully Submitted!</Alert>
            ) : (
              <div></div>
              // <Alert severity="warning">Your Recipe cannot be Submitted.</Alert>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h4>New Recipe Form</h4>
          </Col>
          <Col size="md-12">
            <form>
              <div className="form-row">
                <FormInput
                  value="recipe"
                  size="md-5"
                  function={InputChange}
                  placeholder="Enter Your Recipe(Ex. Salmon Steak)"
                />
                <FormButton
                  value="recipe"
                  size="md-1"
                  function={handleAddRecipe}
                  text="Add"
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
                  function={handleAddRecipe}
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
                  function={handleAddRecipe}
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
                  function={handleAddRecipe}
                  text="Add"
                />

                <FormInput
                  value="cuisine"
                  off="md-3"
                  size="md-5"
                  function={InputChange}
                  placeholder="Enter Cuisine Type Here(Ex. Korean, English, Italian)"
                />
                <FormButton
                  value="cuisine"
                  size="md-1"
                  function={handleAddRecipe}
                  text="Add"
                />
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-9">
            <h4>New Recipe Entry</h4>
            <h5>Recipe Name: {newRecipe.recipe}</h5>
            {error.recipe !== "" ? (
              <Alert severity="error">{error.recipe}</Alert>
            ) : (
              <div></div>
            )}
            <p>Recipe Cuisine: {newRecipe.cuisine}</p>
            {error.cuisine !== "" ? (
              <Alert severity="error">{error.cuisine}</Alert>
            ) : (
              <div></div>
            )}
            <h6>Ingredients: </h6>
            {error.ingredient !== "" ? (
              <Alert severity="error">{error.ingredient}</Alert>
            ) : (
              <div></div>
            )}
            <ul>
              {newRecipe.ingredient.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
            <h6>Directions: </h6>
            {error.direction !== "" ? (
              <Alert severity="error">{error.direction}</Alert>
            ) : (
              <div></div>
            )}
            <ol>
              {newRecipe.direction.map((e) => (
                <li>{e}</li>
              ))}
            </ol>
            <h6>Categories: </h6>
            {error.category !== "" ? (
              <Alert severity="error">{error.category}</Alert>
            ) : (
              <div></div>
            )}
            <ul>
              {newRecipe.category.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          </Col>
          <Col size="md-3">
            <div className="form-group col-md-1">
              <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-primary mt-3"
              >
                Submit Recipe
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
