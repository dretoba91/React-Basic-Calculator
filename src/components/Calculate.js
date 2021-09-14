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
    const result = calculation({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  let display = "";
  if (!total) display = "0";
  if (total) display = total;
  if (total && operation) display = total;
  if (total && operation && next) display = next;

  return (
    <div className="screen">
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
