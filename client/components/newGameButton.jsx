import React from 'react';

function NewGameButton(props) {

  function handleClick(e) {
    e.preventDefault();
    props.restart();
  }

  return (
    <button onClick={handleClick}>
      New Game
    </button>
  )
}

export default NewGameButton;