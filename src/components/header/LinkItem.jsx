import React from "react";

const LinkItem = ({ title }) => {
  return (
    <div className="cursor-pointer hover:text-green text-green-dark text-[18px] font-medium hover:font-bold">
      {title}
    </div>
  );
};

export default LinkItem;
