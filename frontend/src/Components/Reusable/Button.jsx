/* eslint-disable react/prop-types */
import React from "react";

export default function Button({className="",children,...props}) {
  return (
    <button className={`${className} px-4 py-2 bg-gray-400 hover:bg-gray-200 duration-200 rounded mt-1 text-lg`} {...props}>
      {children}
    </button>
  );
}
