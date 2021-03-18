import React, { useState, useEffect } from 'react';

import Title from './title.jsx'
import Description from './description.jsx'
import NewGameButton from './newGameButton.jsx'
import FrameRollCounter from './frameRollCounter.jsx'
import PinsButtons from './pinsButtons.jsx'
import ScoreCard from './scoreCard.jsx'

function App() {
  const [currentPins, setCurrentPins] = useState(null);
  const [frame, setFrame] = useState(-1)
  const [roll, setRoll] = useState(-1)

  // Update currentPins hit based on user input, roll and frame
  const handlePinsButtonClick = (e) => {
    e.preventDefault();

    let pinsHit = Number(e.target.value)
    setCurrentPins(pinsHit);

    let updatedRoll = roll;
    if (roll === 1) {
      updatedRoll = 0;
    } else {
      updatedRoll += 1;
    }
    setRoll(updatedRoll)

    if (updatedRoll === 0) {
      setFrame(frame + 1);
    }
  }

  // Log Current State
  useEffect(() => {
    if (currentPins === null) return;

    console.log('*********')
    console.log(`currentPins: ${currentPins}`)
    console.log(`frame: ${frame + 1}`)
    console.log(`roll: ${roll + 1}`)
  }, [currentPins])


  return (
    <React.Fragment>
      <Title />
      <Description />
      <NewGameButton />
      <FrameRollCounter />
      <PinsButtons onClick={handlePinsButtonClick}/>
      <ScoreCard/>
    </React.Fragment>
  )
}

export default App;