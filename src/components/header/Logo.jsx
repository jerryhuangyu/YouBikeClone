import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="h-[95px] w-[95px] pr-4">
      <img className="h-full" src="/ubike_logo.svg" alt="YouBike logo" />
    </Link>
  );
};

export default Logo;
