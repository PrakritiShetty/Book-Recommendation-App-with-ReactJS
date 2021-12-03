import React, { useState } from "react";
import "./styles.css";

var headingText = "Symbol Interpreter";
var username = "Prakriti";

var symbolDictionary = {
  ":)": "Happy",
  ":(": "Sad",
  ":/": "Confused",
  ":|": "Speechless",
  ":o": "Surprised",
  xD: "Laughing"
};
//var symbolList=[":)",":(",":/",":|",":o","xD"];
var symbolList = Object.keys(symbolDictionary);

export default function App() {
  //var [likes, setlikes] = useState(0);
  var [userInput, setUserInput] = useState("");
  var [meaning2, setmeaning2] = useState("");
  //var [meaning, setMeaning]=useState("");
  function listClickHandler(item) {
    console.log("clicked");
    var meaning2 = symbolDictionary[item];
    setmeaning2(meaning2);
    //likes = likes + 1;
    //setlikes(likes);
  }

  function inputClickHandler(event) {
    console.log(event.target.value);
    userInput = event.target.value;
    setUserInput(userInput);
    //setMeaning(meaning);
    //meaning=symbolDictionary[userInput];
  }
  function getbg(index) {
    if (index % 2 === 0) return "white";
    return "lightgrey";
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: "cursive", backgroundColor: "lightgrey" }}>
        {headingText}
      </h1>
      <h3 style={{ color: "blueviolet" }}>Welcome, {username}</h3>
      <input
        placeholder="Enter Symbol Here"
        onChange={inputClickHandler}></input>
      <h3>{symbolDictionary[userInput]}</h3>
      <h3>{meaning2}</h3>

      <h5>We've listed some symbols that we already know: </h5>
      {symbolList.map(function (item) {
        return <span onClick={() => listClickHandler(item)}>{item}</span>;
      })}
    </div>
  );
}
