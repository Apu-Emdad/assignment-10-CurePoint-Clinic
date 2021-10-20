import React, { useState } from "react";
import "./bmi.css";

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const getHeight = (e) => {
    const h = parseFloat(e.target.value);
    setHeight(h / 100);
  };
  const getWeight = (e) => {
    const w = parseFloat(e.target.value);
    setWeight(w);
  };

  const getBMI = () => {
    const b = (weight / (height * height)).toFixed(2);
    console.log(b);
    setBmi(b);
  };
  return (
    <div className="bg-secondary w-50 mx-auto">
      <input
        type="number"
        className="w-100 border border-warning border-5 my-5"
        placeholder="Height(cm)"
        onBlur={getHeight}
      />
      <br />
      <br />
      <input
        type="number"
        onBlur={getWeight}
        className="w-100 border border-warning border-5 mb-5"
        placeholder="weight (kg)"
      />

      <button className="btn-danger d-block mx-auto mb-3" onClick={getBMI}>
        Know your BMI
      </button>
      {bmi ? (
        <div className="mb-5 pb-5 bmi ">
          <h3 className="text-center">{bmi}</h3>
          {bmi < 18.5 && <h4>UnderWeignt: Improve your diet</h4>}
          {bmi >= 18.5 && bmi < 25 && (
            <h4 className="text-center">
              Normal Weight: Dont't change your diet
            </h4>
          )}
          {bmi >= 25 && bmi < 30 && (
            <h4 className="text-center">Over Weight: Change you diet</h4>
          )}
          {bmi >= 30 && <h4 className="text-center">Obese: Go to doctor</h4>}
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default BMI;
