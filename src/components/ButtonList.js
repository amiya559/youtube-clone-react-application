import React from "react";
import Button from "./Button";

const buttonLists = [
  "All",
  "Java",
  "Spring",
  "Movies",
  "Sports",
  "All",
  "Java",
  "Spring",
  "Movies",
  "Sports",
  "All",
  "Java",
  "Spring",
  "Movies",
  "Sports",
  "All",
  "Java",
  "Spring",
  "Movies",
  "Sports",
  "All",
  "Java",
  "Spring",
  "Movies",
  "Sports",
  "All",
  "Java",
  "Spring",
  "Movies",
  "Sports",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonLists.map((buttonList, index) => (
        <Button key={index} name={buttonList} />
      ))}
    </div>
  );
};

export default ButtonList;
