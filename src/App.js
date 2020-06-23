import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="GridContainer">
        <div className="G1">
          <div className="G1Grid">
            <div>1a</div>
            <div>1b</div>
            <div>1c</div>
            <div>1d</div>
          </div>
        </div>
        <div className="G2">
          <div className="F1">
            <div>2a</div>
            <div>2b</div>
            <div>2c</div>
          </div>
        </div>
        <div className="G3">
          <h1>3a</h1>
        </div>
        <div className="G4">
          <div className="F2">
            <div>4a</div>
            <div>4b</div>
            <div>4c</div>
            <div>4d</div>
          </div>
        </div>
      </div>
    </div>
  );
}
