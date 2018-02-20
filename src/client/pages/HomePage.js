import React from "react";

const Home = () => {
  return (
    <div>
      <div>I am the best Home Component</div>
      <button onClick={() => console.log("hi there")}>Press me</button>
    </div>
  );
};
export default {
  component: Home
};
