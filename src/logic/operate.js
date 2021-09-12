import Big from "big.js";

function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result = "";

  switch (operation) {
    case "+":
      result = num1.plus(num2);
      break;

    case "-":
      result = num1.minus(num2);
      break;

    case "X":
      result = num1.times(num2);
      break;

    case "/":
      result = num1.div(num2);
      break;

    case "%":
      result = num1.mod(num2);
      break;

    default:
      result = "Error";
  }
  return result.toString();
}

export default operate;
