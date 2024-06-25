import React from "react";
import "./Button.css";

function Button({ text, inputText }) {
  return (
    <>
      <button
        onClick={() => {
          return <p>{inputText}</p>;
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
