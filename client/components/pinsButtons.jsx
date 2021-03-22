import React from 'react';

function PinsButtons(props) {

  function handleClick(e) {
    e.preventDefault();
    alert(`Clicked ${e.target.value}`)
  }

  return (
    <div>
      <div>
        <h4>Pins Hit On Current Roll:</h4>
      </div>
      <div>
        <button value="0" onClick={props.onClick}>
          0
        </button>
        <button value="1" onClick={props.onClick} disabled={true}>
          1
        </button>
        <button value="2" onClick={props.onClick}>
          2
        </button>
        <button value="3" onClick={props.onClick}>
          3
        </button>
        <button value="4" onClick={props.onClick}>
          4
        </button>
        <button value="5" onClick={props.onClick}>
          5
        </button>
        <button value="6" onClick={props.onClick}>
          6
        </button>
        <button value="7" onClick={props.onClick}>
          7
        </button>
        <button value="8" onClick={props.onClick}>
          8
        </button>
        <button value="9" onClick={props.onClick}>
          9
        </button>
        <button value="10" onClick={props.onClick}>
          10
        </button>
      </div>
    </div>
  )
}

export default PinsButtons;