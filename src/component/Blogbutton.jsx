import React from "react";

export default function Blogbutton({ cle, options, selectop, handlselect }) {
  return (
    <>
      {options.map((option) => (
        <button
          type="button"
          className={`${selectop === option.id ? cle : ""}`}
          key={option.id}
          onClick={() => handlselect(option.id)}
        >
          {option.name}
        </button>
      ))}
    </>
  );
}
