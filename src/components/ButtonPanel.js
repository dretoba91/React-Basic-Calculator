import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonPanel = ({ clickApp }) => {
  // const clickHandle = (buttonName) => {
  //   clickApp(buttonName);
  // };
  return (
    <>
      <div className="buttonPanel">
        <Button buttonName="AC" clickPanel={clickApp} color="gray" />
        <Button buttonName="+/-" clickPanel={clickApp} color="gray" />
        <Button buttonName="%" clickPanel={clickApp} color="gray" />
        <Button buttonName="/" clickPanel={clickApp} color="gray" />
      </div>

      <div className="buttonPanel">
        <Button buttonName="7" clickPanel={clickApp} color="gray" />
        <Button buttonName="8" clickPanel={clickApp} color="gray" />
        <Button buttonName="9" clickPanel={clickApp} color="gray" />
        <Button buttonName="X" clickPanel={clickApp} color="gray" />
      </div>

      <div className="buttonPanel">
        <Button buttonName="4" clickPanel={clickApp} color="gray" />
        <Button buttonName="5" clickPanel={clickApp} color="gray" />
        <Button buttonName="6" clickPanel={clickApp} color="gray" />
        <Button buttonName="-" clickPanel={clickApp} color="gray" />
      </div>

      <div className="buttonPanel">
        <Button buttonName="1" clickPanel={clickApp} color="gray" />
        <Button buttonName="2" clickPanel={clickApp} color="gray" />
        <Button buttonName="3" clickPanel={clickApp} color="gray" />
        <Button buttonName="+" clickPanel={clickApp} color="gray" />
      </div>

      <div className="buttonPanel">
        <Button buttonName="0" clickPanel={clickApp} color="gray" />
        <Button buttonName="." clickPanel={clickApp} color="gray" />
        <Button buttonName="=" clickPanel={clickApp} />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickApp: PropTypes.func.isRequired,
};

export default ButtonPanel;
