import React, { useState } from "react";

const Container = () => {
  const [isFull, setIsFull] = useState(false);
  const [secondPara, setSecondPara] = useState(false)
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const toggleText = () => {
    setIsFull(!isFull);
  };
  const toggleTextSecond = () => {
    setSecondPara(!secondPara);
  };

  return (
    <div className="container">
      <div className="cnt-1">
        <div className="cnt-heading">Lorem ispsum</div>
        <div className="cnt-para">
          {isFull ? text : `${text.slice(0, 250)}...`}
          {!isFull && (
            <span onClick={toggleText} className="underline">
              View More
            </span>
          )}
        </div>
      </div>
      <div className="cnt-1">
        <div className="cnt-heading">Lorem ispsum</div>
        <div className="cnt-para">
        {secondPara ? text : `${text.slice(0, 100)}...`}
          {!secondPara && (
            <span onClick={toggleTextSecond} className="underline">
              View More
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
