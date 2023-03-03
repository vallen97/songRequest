"use client";
import React from "react";

interface buttonProps {
  buttonName: String;
  buttonStyle: String;
}

export const CustomButton: React.FC<buttonProps> = (Props) => {
  return (
    <>
      <button onClick={() => console.log("Button Componet Clicked")}>
        {Props.buttonName}
      </button>
    </>
  );
};

export default CustomButton;
