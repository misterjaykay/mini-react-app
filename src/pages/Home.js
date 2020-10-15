import React, { useContext } from "react";
import { Table } from "reactstrap";
import RecipeContext from "../utils/RecipeContext";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Home() {
  const { recipes, setRecipes } = useContext(RecipeContext);

  const InputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
  };

  return (
    <>
      <Jumbotron title={"Recipe List"} subtitle={"Get All The Recipes Here"} />
      <Container>
        <Row>
          <Col size="md-12">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Recipe name</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe) => (
                  <tr key={recipe.id}>
                    <th scope="row">{recipe.id}</th>
                    <td>{recipe.name}</td>
                    <td>
                      <Link to={{ pathname: "/result", data: recipe }}>
                        <i className="fas fa-utensils"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
