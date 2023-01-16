import React from "react";
import "./styles.css";
import { useState } from "react";
import oneReal from './1Real.jfif';
import twoReais from './2Reais.jfif';
import fiveReais from './5Reais.jfif';
import tenReais from './10Reais.jfif';
import twentyReais from './20Reais.jfif';
import fiftyReais from './50Reais.jfif';
import oneHReais from './100Reais.jfif';
import twohReais from './200Reais.jfif';

export default function App() {
  const [amount, setAmount] = useState(0);
  const [oneH, setOneH] = useState("0");
  const [twoH, setTwoH] = useState("0");
  const [fifty, setFifty] = useState("0");
  const [twenty, setTwenty] = useState("0");
  const [ten, setTen] = useState("0");
  const [five, setFive] = useState("0");
  const [two, setTwo] = useState("0");
  const [one, setOne] = useState("0");
  const [returnZero, setReturnZero] = useState("");
  let returnAmount = amount;

  const returnHandler = () => {
    console.log(amount);
    console.log(returnAmount);
    if (returnAmount === 0) {
      setReturnZero("Coloque um Valor.");
      setOne(0);
      setTwo(0);
      setFive(0);
      setTen(0);
      setTwenty(0);
      setFifty(0);
      setOneH(0);
      setTwoH(0);
      
    } else if (returnAmount > 0) {

      setReturnZero("")

      const two00 = Math.floor(returnAmount / 200);
      returnAmount -= two00 * 200;
      setTwoH(two00);

      const one00 = Math.floor(returnAmount / 100);
      returnAmount -= one00 * 100;
      setOneH(one00);

      const fifty50 = Math.floor(returnAmount / 50);
      returnAmount -= fifty50 * 50;
      setFifty(fifty50);

      const twenty20 = Math.floor(returnAmount / 20);
      returnAmount -= twenty20 * 20;
      setTwenty(twenty20);

      const ten10 = Math.floor(returnAmount / 10);
      returnAmount -= ten10 * 10;
      setTen(ten10);

      const five5 = Math.floor(returnAmount / 5);
      returnAmount -= five5 * 5;
      setFive(five5);

      const two2 = Math.floor(returnAmount / 2);
      setTwo(two2);
      returnAmount -= two2 * 2;

      const one1 = Math.floor(returnAmount / 1);
      setOne(one1);
      returnAmount -= one1 * 2;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Banco PA</h1>
        <h2>Coloque o Valor a ser Sacado</h2>
      </header>
      
      <p>
        <input
          placeholder="Enter Deposit"
          onChange={(event) => {
            setAmount(parseInt(event.target.value));
          }}
        />
      </p>
      <button onClick={returnHandler}>Sacar</button>
      
      <p>{returnZero}</p>
      <div className="allDenoBtns">

        <div className={one == 0 ? "notasN" : "notas"}>
        <p>{one}</p>
          <img src={oneReal} alt="" className="notasImage"/>
        </div>
        
        <div className={two == 0 ? "notasN" : "notas"}>
        <p>{two}</p>
          <img src={twoReais} alt="" className="notasImage"/>
        </div>

        <div className={five == 0 ? "notasN" : "notas"}>
          <p>{five}</p>
          <img src={fiveReais} alt="" className="notasImage" />
        </div>

        <div className={ten == 0 ? "notasN" : "notas"}>
        <p>{ten}</p>
          <img src={tenReais} alt="" className="notasImage"/>
        </div>

        <div className={twenty == 0 ? "notasN" : "notas"}>
        <p>{twenty}</p>
          <img src={twentyReais} alt="" className="notasImage"/>
        </div>

        <div className={fifty == 0 ? "notasN" : "notas"}>
        <p>{fifty}</p>
          <img src={fiftyReais} alt="" className="notasImage"/>
        </div>

        <div className={oneH == 0 ? "notasN" : "notas"}>
        <p>{oneH}</p>
          <img src={oneHReais} alt=""className="notasImage" />
        </div>

        <div className={twoH == 0 ? "notasN" : "notas"}>
        <p>{twoH}</p>
          <img src={twohReais} alt="" className="notasImage"/>
        </div>

      </div>
      <footer><br /></footer>
    </div>
  );
}