/* eslint-disable react/prop-types */
import React from "react";

export default function Button({className="",children,...props}) {
  return (
    <button className={`px-4 py-2 bg-gray-400 duration-200 rounded ${className}`} {...props}>
      {children}
    </button>
  );
}
