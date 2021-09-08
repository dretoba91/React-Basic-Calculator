import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonPanel = (clickApp) => {
  const clickHandle = (buttonName) => {
    clickApp(buttonName);
  };
  return (
    <>
      <div className="">
        <Button buttonName="AC" clickPanel={clickHandle} color="" />
        <Button buttonName="+/-" clickPanel={clickHandle} color="" />
        <Button buttonName="%" clickPanel={clickHandle} color="" />
        <Button buttonName="/" clickPanel={clickHandle} color="" />
      </div>

      <div className="">
        <Button buttonName="7" clickPanel={clickHandle} color="" />
        <Button buttonName="8" clickPanel={clickHandle} color="" />
        <Button buttonName="9" clickPanel={clickHandle} color="" />
        <Button buttonName="X" clickPanel={clickHandle} color="" />
      </div>

      <div className="">
        <Button buttonName="4" clickPanel={clickHandle} color="" />
        <Button buttonName="5" clickPanel={clickHandle} color="" />
        <Button buttonName="6" clickPanel={clickHandle} color="" />
        <Button buttonName="-" clickPanel={clickHandle} color="" />
      </div>

      <div className="">
        <Button buttonName="1" clickPanel={clickHandle} color="" />
        <Button buttonName="2" clickPanel={clickHandle} color="" />
        <Button buttonName="3" clickPanel={clickHandle} color="" />
        <Button buttonName="+" clickPanel={clickHandle} color="" />
      </div>

      <div className="">
        <Button buttonName="0" clickPanel={clickHandle} color="" />
        <Button buttonName="." clickPanel={clickHandle} color="" />
        <Button buttonName="=" clickPanel={clickHandle} color="" />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickApp: PropTypes.func.isRequired,
};

export default ButtonPanel;
