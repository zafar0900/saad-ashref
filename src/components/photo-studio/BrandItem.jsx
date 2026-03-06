import React from "react";

const BrandItem = ({ brand }) => {
  return (
    <div className="col">
      <div className="brands__item brands__item--extend ">
        <img
          src={brand?.src}
          alt={brand?.alt}
        />
      </div>
    </div>
  );
};

export default BrandItem;
