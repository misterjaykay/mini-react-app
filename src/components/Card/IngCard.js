import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardHeader
} from "reactstrap";

export default function Cards(props) {
  const { ingred, subIngred, subRecipe } = props;
  return (
    <>
      <Card className="mb-4">
        {subRecipe === undefined ? (
          <CardHeader className="text-center" tag="h4">
            Ingredients
          </CardHeader>
        ) : (
          <CardHeader className="text-center" tag="h4">
            {subRecipe}
          </CardHeader>
        )}
        <CardBody>
          {ingred !== undefined ? (
              <ul>
                {ingred.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
          ) : (
              <ul>
                {subIngred.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
          )}
        </CardBody>
      </Card>
    </>
  );
}
