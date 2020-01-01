import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/" className="btn btn-light">
        返回
      </Link>
      <h1 className="text-center">Not Found...</h1>
    </div>
  );
};

export default NotFound;
