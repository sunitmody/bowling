import React from 'react';

function ScoreCard(props) {

  function handleClick(e) {
    e.preventDefault();
    alert(`Clicked ${e.target.value}`)
  }

  const scores = props.frameScores.map((score, index) => {

    const scoreDisplay = score === 'strike' ? ''
                      :  score === 'spare' ? ''
                      :  score;

    return (
      <div className="scoreBox">
        Frame {index + 1}
        <div className="firstRoll">
          Roll1: {props.pins[index][0]}
        </div>
        <div className="secondRoll">
          Roll2: {props.pins[index][1]}
        </div>
        Cumulative Score: {scoreDisplay}
        <div>
          **********
        </div>
      </div>
    )
  })

  return (
    <div>
      {scores}
    </div>
  )
}

export default ScoreCard;