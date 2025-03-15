import React from "react";
import { useState, useEffect } from "react";
const TextTruncate = ({ text, wordLimit = 18 }) => {

  // Split text into words and limit it to 'wordLimit'
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const truncatedText =
    isMobile && text.split(" ").length > wordLimit
      ? text.split(" ").slice(0, wordLimit).join(" ") + "..."
      : text.split(" ").slice(0, wordLimit +25).join(" ") + "...";

  return <p className="list-view-description">{truncatedText}</p>;
};

export default TextTruncate;