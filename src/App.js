import { useState } from "react";
import "./App.css";
import { ethers } from 'ethers';

function App() {
  const [weiAmount, setWeiAmount] = useState("0");
  const [etherAmount, setEtherAmount] = useState("0");
  const [currentTimestamp, setCurrentTimestamp] = useState("");
  const [hourTimestamp, setHourTimestamp] = useState("");
  const [dayTimestamp, setDayTimestamp] = useState("");
  const [weekTimestamp, setWeekTimestamp] = useState("");
  const [hashText, setHashText] = useState("");
  const [hashResult, setHashResult] = useState("");
  const [encodeText, setEncodeText] = useState("");
  const [encodeResult, setEncodeResult] = useState("");

  function handleWeiUpdate(e) {
    setWeiAmount(e.target.value);
    console.log(`handleWeiUpdate: ${e.target.value}`);
    try{
      const ethValue = ethers.formatEther(e.target.value);
      setEtherAmount(ethValue);
    } catch(err) {
      console.log(err);
    }
  }

  function handleEthUpdate(e) {
    setEtherAmount(e.target.value);
    console.log(`handleEthUpdate: ${e.target.value}`);
    try{
      const weiValue = ethers.parseUnits(e.target.value,"ether");
      console.log(`weiValue: ${weiValue}`);
      setWeiAmount(weiValue);
      console.log(`weiAmount: ${weiAmount}`);
    } catch(err) {
      console.log(err);
    }
  }

  function handleTimestampQuery() {

  }

  function handleHourQuery() {

  }

  function handleDayQuery() {

  }

  function handleWeekQuery() {

  }

  function handleHashText() {

  }

  function handleHashCalc() {

  }

  function handleEncodeText() {

  }

  function handleAbiEncode() {

  }

  return (
    <div className="content_wrapper">
      <h1 align="center">EthTools</h1>
      <div className="request container">
        <h2>Unit Converter</h2>
        <br />
        <form>
          <label>
            Wei:
            <br />
            <input
              type="text"
              value={weiAmount}
              onChange={(e) => handleWeiUpdate(e)}
            />
          </label>
          <br />
          <label>
            Ether:
            <br />
            <input
              type="text"
              value={etherAmount}
              onChange={(e) => handleEthUpdate(e)}
            />
          </label>
          <br />
        </form>
      </div>
      <div className="request container">
        <h2>Timestamp Calculator</h2>
        <br />
        <form>
          <label>
            Current Timestamp: <br/><button type="button" onClick={handleTimestampQuery}>Query</button>
            <br />
            <p>{currentTimestamp ? currentTimestamp : ""}</p>
          </label>
          <br />
          <label>
            1 Hour: <br/><button type="button" onClick={handleHourQuery}>Query</button>
            <br />
            <p>{hourTimestamp ? hourTimestamp : ""}</p>
          </label>
          <br />
          <label>
            1 Day: <br/><button type="button" onClick={handleDayQuery}>Query</button>
            <br />
            <p>{dayTimestamp ? dayTimestamp : ""}</p>
          </label>
          <br />
          <label>
            1 Week: <br/><button type="button" onClick={handleWeekQuery}>Query</button>
            <br />
            <p>{weekTimestamp ? weekTimestamp : ""}</p>
          </label>
          <br />
        </form>
      </div>
      <div className="request container">
        <h2>Hash Calculator</h2>
        <br />
        <form>
          <label>
            Text:
            <br />
            <input
              type="text"
              value={hashText}
              onChange={(e) => handleHashText(e)}
            />
          </label>
          <br />
          <button type="button" onClick={handleHashCalc}>Calculate</button>
          <br />
          <p>{hashResult ? hashResult : ""}</p>
        </form>
      </div>
      <div className="request container">
        <h2>ABI Encoder</h2>
        <br />
        <form>
          <label>
            Text:
            <br />
            <input
              type="text"
              value={encodeText}
              onChange={(e) => handleEncodeText(e)}
            />
          </label>
          <br />
          <button type="button" onClick={handleAbiEncode}>Encode</button>
          <br />
          <p>{encodeResult ? encodeResult : ""}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
