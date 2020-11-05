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
  }

  return (
    <>
      <Jumbotron title={titleText.main} subtitle={titleText.subtitle} />
      <Navbar />
      <Container>
        <Row>
          <ListCard array={recipes} />
        </Row>
      </Container>
    </>
  );
}

export default Home;
