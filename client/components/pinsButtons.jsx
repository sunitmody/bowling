import React from 'react';

function PinsButtons(props) {

  function handleClick(e) {
    e.preventDefault();
    alert(`Clicked ${e.target.value}`)
  }

  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const buttons = options.map((option, index) => {

    let disabledBool = false;
    if (props.roll + 1 === 1 && props.pinsHit !== null && option > 10 - props.pinsHit) {
      disabledBool = true;
    }

    return (
      <div>
        <button value={option} onClick={props.onClick} disabled={disabledBool}>
          {option}
        </button>
      </div>
    )
  })

  return (
    <div>
      <div>
        <h4>Pins Hit On Current Roll:</h4>
      </div>
      <div>
        {buttons}
      </div>
    </div>
  )
}

export default PinsButtons;