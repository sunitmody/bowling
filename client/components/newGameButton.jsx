import React from 'react';

function NewGameButton() {

  function handleClick(e) {
    e.preventDefault();
    alert('New Game Button Clicked!')
  }

  return (
    <button onClick={handleClick}>
      New Game
    </button>
  )
}

export default NewGameButton;