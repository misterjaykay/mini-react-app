import React from "react";

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children, attr }) {
  return (
    <div
      className={`${size
        .split(" ")
        .map((size) => "col-" + size)
        .join(" ")} ${attr}`}
    >
      {children}
    </div>
  );
}
