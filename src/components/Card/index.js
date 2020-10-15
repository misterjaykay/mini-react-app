import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Cards = ({ array }) => {
    
  return (
    <>
    {array.map(e => 
    <div>
      <Card>
        <CardImg top width="50%" src="/assets/318x180.svg" alt={e.recipe} />
        <CardBody>
          <CardTitle>{e.recipe}</CardTitle>
          <CardSubtitle>{e.recipe}</CardSubtitle>
          <CardText>
            <ul>
              {e.ingred.map(ing => 
                <li>{ing}</li>  
              )}
            </ul>
            <ol>
              {e.steps.map(step =>
                <li>{step}</li>
              )}
            </ol>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>)}
    </>
  );
};

export default Cards;