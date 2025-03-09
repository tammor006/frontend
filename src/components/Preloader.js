import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 3000);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </>
  );
};

export default Preloader;
