import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa"; // Install react-icons if needed
import "../style.css";
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="primary"
      onClick={scrollToTop}
      className={`scroll-to-top ${showButton ? "show" : ""}`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: showButton ? "block" : "none",
        borderRadius: "50%",
        padding: "10px 15px",
        zIndex: "999",
        backgroundColor:"#3778bc"
      }}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTop;
