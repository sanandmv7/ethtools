import { useState } from "react";
import "./App.css";
import { ethers } from 'ethers';

function App() {
  const [weiAmount, setWeiAmount] = useState("0");
  const [etherAmount, setEtherAmount] = useState("0");

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
    </div>
  );
}

export default App;
