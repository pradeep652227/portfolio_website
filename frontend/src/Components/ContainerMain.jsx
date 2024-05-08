/* eslint-disable react/prop-types */
import React from "react";

export default function Container({ children }) {
  return (
    <div style={{ maxWidth: "100vw", width: "1500px", margin: "0 auto" }}>
      {children}
    </div>
  );
}
