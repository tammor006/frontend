import React from "react";

const TextTruncate = ({ text, wordLimit = 20 }) => {

  // Split text into words and limit it to 'wordLimit'
  const truncatedText =
    text.split(" ").length > wordLimit
      ? text.split(" ").slice(0, wordLimit).join(" ") + "..."
      : text;

  return <p className="list-view-description">{truncatedText}</p>;
};

export default TextTruncate;