import React from "react";
import { Container } from '../Grid';
import "./style.css";

export default function Jumbotron({ fluid, title, subtitle }) {
  return (
    <div className={`jumbotron ${fluid ? "jumbotron-fluid" : ""}`}>
        <Container>
            <h1 className="display-4 text-center">{title}</h1>
            <p className="lead text-center">{subtitle}</p>
        </Container>
    </div>
  );
}
