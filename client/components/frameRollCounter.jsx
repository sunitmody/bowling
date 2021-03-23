import React, { useState } from 'react';

function FrameRollCounter(props) {
  return (
    <div>
      <h2>Frame: {props.frame + 1}</h2>
      <h2>Roll: {props.roll + 1}</h2>
    </div>
  )
}

export default FrameRollCounter;