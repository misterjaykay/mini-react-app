import React from "react";
import { Container } from '../Grid';

export default function Jumbotron({ fluid, title, subtitle }) {
  return (
    <div className={`jumbotron ${fluid ? "jumbotron-fluid" : ""}bg-primary text-light text-center`}>
        <Container>
            <h1 className="display-4">{title}</h1>
            <p className="lead">{subtitle}</p>
        </Container>
    </div>
  );
}
