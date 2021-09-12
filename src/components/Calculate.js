import React, { useState } from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculation from "../logic/calculation";

function Calculate({
  total: initialTotal,
  next: initialNext,
  operation: initialOperation,
}) {
  const [total, setTotal] = useState(initialTotal);
  const [next, setNext] = useState(initialNext);
  const [operation, setOperation] = useState(initialOperation);

  const handleClick = (buttonName) => {
    const result = calculation({});
  };

  return (
    <div>
      <div>
        <h2>Solve your Math problems</h2>
      </div>

      <div>
        <Display result={display} />
        <ButtonPanel clickApp={handleClick} />
      </div>
    </div>
  );
}

export default Calculate;
