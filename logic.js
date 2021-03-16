/*
Traditional Scoring

Ten frames
  Two deliveries of ball on each frame to knock down all ten pins unless you get a strike on first delivery

  If you don't knock all ten pins down in the two deliveries (either a strike or spare) then you get the total pins knocked down for that round

  If you hit a strike: You get 10 points plus pins knocked down in next two rolls
    If in frame 10, you hit a strike, you get 2 bonus rolls for extra pins.

  If you get a spare: You get 10 points plus pins knocked down in only the next one roll.
    If in frame 10, you get a spare, you get 1 bonus roll for extra pins.

  Goal:

  Create an algorithm that provides point total at the end of each frame.

  Input: Number of pins hit on each roll



*/
// Variables to track in state
let pins = [
  [7, 3],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1]
];

let frameScores = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

// User rolls
let currentPins = 3;

// If rolled is 1, reset to 0
// Otherwise increment
let rolled = 1; // initial -1

// If rolled is 0, increment
let frame = 0; // initial -1

// spares array
let spares = []

// strikes array


// Set pins in state
pins[frame][rolled] = currentPins;

// Update score board component

// Calculate frame score
let frameScore = () => {
  // After first roll
  if (rolled === 0) {
    // If strike
    if (currentPins === 10) {

    }
  }

  // After second roll
  if (rolled === 1) {
    let prevPins = pins[frame][0];
    // If spare
    if (currentPins + prevPins === 10) {
      spares.push()
    } else {

    }
  }
}

console.log(rolls.length);