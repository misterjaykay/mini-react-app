import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap";

export default function Cards(props) {
    const [obj, setObj] = useState({
        title: "",
        paragraph: []
    });
    if(props.subRecipe ==! undefined) {
        setObj({
            ...obj,
            title: props.subRecipe
        })
    }
  return (
    <>
      <Card>
          {props.subRecipe === undefined ? (
            <CardHeader className="text-center" tag="h4">Ingredients</CardHeader>
          ) : (
            <CardHeader className="text-center" tag="h4">{props.subRecipe}</CardHeader>
          )}
        <CardBody>
          {props.ingred !== undefined ? (
            <CardText>
              <ul>
                {props.ingred.map((ing) => (
                  <li>{ing}</li>
                ))}
              </ul>
            </CardText>
          ) : (
            <CardText>
              <ul>
                {props.subIngred.map((ing) => (
                  <li>{ing}</li>
                ))}
              </ul>
            </CardText>
          )}
        </CardBody>
      </Card>
    </>
  );
}
