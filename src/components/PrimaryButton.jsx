import React from "react";

export default function PrimaryButton({ text, style, onClickHandler }) {
  return (
    <div
      onClick={onClickHandler}
      className={`text-center text-white bg-gradient-to-tr from-indigo-600 to-purple-400 px-5 py-2 rounded cursor-pointer ${style}`}
    >
      {text}
    </div>
  );
}
