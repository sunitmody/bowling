import React, { useState } from 'react';

function FrameRollCounter() {

  const [frame, setFrame] = useState(-1)
  const [rolled, setRolled] = useState(-1)

  let displayFrame = frame < 0? 1 : frame + 1;
  let displayRoll = rolled < 0? 1 : rolled + 1;

  return (
    <div>
      <h2>Frame: {displayFrame}</h2>
      <h2>Roll: {displayRoll}</h2>
    </div>
  )
}

export default FrameRollCounter;