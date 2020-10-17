import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardHeader
} from "reactstrap";

export default function Cards({ steps, subSteps, subRecipe }) {

  return (
    <>
      <Card className="mb-4">
        {subSteps === undefined ? (
          <CardHeader className="text-center" tag="h4">
            Directions
          </CardHeader>
        ) : (
          <CardHeader className="text-center" tag="h4">
            {subRecipe} Directions
          </CardHeader>
        )}
        <CardBody>
          {steps !== undefined ? (
              <ul>
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
          ) : (
              <ul>
                {subSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
          )}
        </CardBody>
      </Card>
    </>
  );
}
