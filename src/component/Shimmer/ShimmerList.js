import React from "react";
import ShimmerCard from "./ShimmerCard";
import "./ShimmerList.css";

const ShimmerList = () => {
  return (
    <div className="shimmer-list-container">
      <div className="shimmer-list">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default ShimmerList;
