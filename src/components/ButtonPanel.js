import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ButtonPanel = () => {
  return (
    <>
      <div>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
      </div>

      <div>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
      </div>

      <div>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
      </div>

      <div>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
      </div>

      <div>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
        <Button buttonName="" clickPanel={} color=""/>
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
    clickApp: PropTypes.func.isRequired,
}

export default ButtonPanel;
