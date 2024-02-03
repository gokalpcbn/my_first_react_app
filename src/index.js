import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const MyComp1 = () => <h1>{"Ali"}</h1>;

const MyComponentH1 = (props) => {
  console.log("a1", props.a1);
  console.log("b2", props.b2);
  const myWords = "I Love JSX!, " + props.a1 + props.b2;

  return <h1>{myWords}</h1>;
};

const MyBigComponent = (props) => {
  let myArray = props.arr;
  console.log(myArray);

  return (
    <div>
      {myArray.map((item) => (
        <MyComponentH1 a1={item} b2={item + 1} />
      ))}
    </div>
  );
};

//<MyComponentH1 a1={2} b2={3} />;

// root.render(<MyComponentH1 a1={2} b2={3} />);
root.render(<MyBigComponent arr={[2, 3, 4]} />);
