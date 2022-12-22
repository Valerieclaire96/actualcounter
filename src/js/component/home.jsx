import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";

//create your first component

function Home(props) {
  return (
    <div className="container">
      <h1 className="icon num">
        <AiOutlineClockCircle />
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 100000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 10000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 1000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 100) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 10) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 1) % 10}
      </h1>
    </div>
  );
}

export default Home;
