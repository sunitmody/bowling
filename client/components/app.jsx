import React, { useState, useEffect } from 'react';

import Title from './title.jsx'
import Description from './description.jsx'
import NewGameButton from './newGameButton.jsx'
import FrameRollCounter from './frameRollCounter.jsx'
import PinsButtons from './pinsButtons.jsx'
import ScoreCard from './scoreCard.jsx'

function App() {
  const [pinsHit, setPinsHit] = useState(null);
  const [frame, setFrame] = useState(-1);
  const [roll, setRoll] = useState(-1);
  const [strikes, setStrikes] = useState([]);
  const [frameScores, setFrameScores] = useState([null,null,null,null,null,null,null,null,null,null]);
  const [pins, setPins] = useState(
    [
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null]
    ]
  )

  // Update pins and score hit based on user input, roll and frame
  const handlePinsButtonClick = (e) => {
    e.preventDefault();
    let hit = Number(e.target.value);

    // Temp State Variables
    let currentRoll = roll;
    let currentFrame = frame;
    let currentPins = [];
    for (var i = 0; i < pins.length; i ++) {
      currentPins[i] = pins[i].slice();
    }
    let currentFrameScores = [...frameScores];

    // Update pins hit
    setPinsHit(hit);

    // Update roll
    if (roll === 1) {
      currentRoll = 0;
    } else {
      currentRoll += 1;
    }
    setRoll(currentRoll);

    // Update frame
    if (currentRoll === 0) {
      currentFrame += 1;
      setFrame(currentFrame);
    }

    // Update currentPins
    currentPins[currentFrame][currentRoll] = hit;
    console.log(currentPins);
    setPins(currentPins);

    // Calculate and update score
    score(currentFrameScores, currentRoll, currentFrame, currentPins, hit);
  }

  // Score Calculating Function
  let score = (currentFrameScores, currentRoll, currentFrame, currentPins, hit) => {
    let lastFrame = currentFrameScores[currentFrame - 1] || 0;
    let twoFramesAgo = currentFrameScores[currentFrame - 2] || 0;
    let threeFramesAgo = currentFrameScores[currentFrame - 3] || 0;

    // After first roll
    if (currentRoll === 0) {

      // If previous frame is an unresolved spare
      if (lastFrame === 'spare') {
        currentFrameScores[currentFrame - 1] = twoFramesAgo + 10 + hit;
        setFrameScores(currentFrameScores);
      }

      // If two frames ago is an unresolved strike
      if (twoFramesAgo === 'strike') {
        currentFrameScores[currentFrame - 2] = threeFramesAgo + 20 + hit;
        setFrameScores(currentFrameScores);
      }

      // If strike
      if (hit === 10) {
        console.log('in strike territory')
        currentFrameScores[currentFrame] = 'strike';
        console.log(currentFrameScores);
        setFrameScores(currentFrameScores);
        // Move onto next frame
        currentRoll = -1;
        setRoll(currentRoll)
      }
    }

    // After second roll
    if (currentRoll === 1) {
      let total = currentPins[currentFrame][0] + currentPins[currentFrame][1];

      // If previous frame was a strike
      if (lastFrame === 'strike') {
        lastFrame = currentFrameScores[currentFrame - 1] = twoFramesAgo + 10 + total;
        setFrameScores(currentFrameScores);
      }

      // If spare
      if (total === 10) {
        currentFrameScores[currentFrame] = 'spare';
        setFrameScores(currentFrameScores);
      } else {
        currentFrameScores[currentFrame] = lastFrame + total;
        setFrameScores(currentFrameScores);
      }
    }
  }

  // Reset Game Function
  let restart = () => {
    setPinsHit(null);
    setFrame(-1);
    setRoll(-1);
    setStrikes([]);
    setFrameScores([null,null,null,null,null,null,null,null,null,null]);
    setPins([
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null]
    ]);
  }

  // Log Current State
  useEffect(() => {
    if (pinsHit === null) return;

    console.log('*********')
    console.log(`pinsHit: ${pinsHit}`)
    console.log(`frame: ${frame + 1}`)
    console.log(`roll: ${roll + 1}`)
    console.log(`framescores: ${frameScores}`)
  }, [pinsHit])


  return (
    <React.Fragment>
      <Title />
      <Description />
      <NewGameButton restart={restart} />
      <FrameRollCounter roll={roll} frame={frame} />
      <PinsButtons onClick={handlePinsButtonClick} pinsHit={pinsHit} roll={roll} />
      <ScoreCard pins={pins} frameScores={frameScores} />
    </React.Fragment>
  )
}

export default App;