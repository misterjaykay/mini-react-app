import React from "react";
import { Card, CardText, CardBody, CardHeader } from "reactstrap";

export default function Cards({ ingredient, direction }) {
  return (
    <>
      <Card className="mb-4">
        {ingredient ? (
          <CardHeader className="text-center" tag="h4">
            Ingreident
          </CardHeader>
        ) : (
          <CardHeader className="text-center" tag="h4">
            Directions
          </CardHeader>
        )}
        <CardBody>
          {ingredient ? (
            <ul>
              {ingredient.map((each) => (
                <li>{each}</li>
              ))}
            </ul>
          ) : (
            <ol>
              {direction.map((each) => (
                <li>{each}</li>
              ))}
            </ol>
          )}
          {/* {steps !== undefined ? (
              <ul>
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
          ) : (subSteps !== undefined) ? (
              <ul>
                {subSteps.map((step) => (
                  <li key={step}>{step}</li>
                )
                )}
              </ul>
          ) : (<div></div>)} */}
        </CardBody>
      </Card>
    </>
  );
}
