import React, { useState } from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

function Calculate() {
  return (
    <div>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default Calculate;
