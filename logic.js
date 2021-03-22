/*
Traditional Scoring

Ten frames
  Two deliveries of ball on each frame to knock down all ten pins unless you get a strike on first delivery

  If you don't knock all ten pins down in the two deliveries (either a strike or spare) then you get the total pins knocked down for that round

  If you hit a strike (only counts on first roll): You get 10 points plus pins knocked down in next two rolls
    If in frame 10, you hit a strike, you get 2 bonus rolls for extra pins.

  If you get a spare (on the second roll): You get 10 points plus pins knocked down in only the next one roll.
    If in frame 10, you get a spare, you get 1 bonus roll for extra pins.

  Goal:

  Create an algorithm that provides point total at the end of each frame.

  Input: Number of pins hit on each roll



*/
// Variables to track in state
let pins = [
  [7, 3],
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
];

let frameScores = ['spare',null,null,null,null,null,null,null,null,null];

// User rolls
let currentPins = 3;

// If rolled is 1, reset to 0
// Otherwise increment
let rolled = 1; // initial -1

// If rolled is 0, increment
let frame = 0; // initial -1

// // is previous frame a spare?
// let prevSpare = false;

// unresolved strikes array
let strikes = [];

// Set pins in state
pins[frame][rolled] = currentPins;

// Update score board component

// Calculate frame score
let frameScore = () => {

  let lastFrame = frameScores[frame - 1] || 0;
  let twoFramesAgo = frameScores[frame - 2] || 0;
  let threeFramesAgo = frameScores[frame - 3] || 0;

  // After first roll
  if (rolled === 0) {

    // If previous frame is an unresolved spare
    if (lastFrame === 'spare') {
      frameScores[frame - 1] = twoFramesAgo + 10 + currentPins;
    }

    // If two frames ago is an unresolved strike
    if (twoFramesAgo === 'strike') {
      frameScores[frame - 2] = threeFramesAgo + 20 + currentPins;
    }

    // If strike
    if (currentPins === 10) {
      frameScores[frame] === 'strike';
      // Move onto next frame
      rolled = -1;
    }
  }

  // After second roll
  if (rolled === 1) {
    let prevPins = pins[frame][0];
    let total = currentPins + prevPins

    // If previous frame was a strike
    if (lastFrame === 'strike') {
      lastFrame = frameScores[frame - 1] = twoFramesAgo + 10 + total;
    }

    // If spare
    if (total === 10) {
      frameScores[frame] === 'spare';
    } else {
      frameScores[frame] = frameScores[frame - 1] + total;
    }
  }
}

console.log(pins.length);

// #############################################

score(currentFrameScores, currentRoll, currentFrame, currentPins);

let score = (frameScores, roll, frame, pins) => {
  let lastFrame = currentFrameScores[currentFrame - 1] || 0;
  let twoFramesAgo = currentFrameScores[currentFrame - 2] || 0;
  let threeFramesAgo = currentFrameScores[currentFrame - 3] || 0;

  // After first roll
  if (currentRoll === 0) {

    // If previous frame is an unresolved spare
    if (lastFrame === 'spare') {
      currentFrameScores[currentFrame - 1] = twoFramesAgo + 10 + currentPins;
      setFrameScores(currentFrameScores);
    }

    // If two frames ago is an unresolved strike
    if (twoFramesAgo === 'strike') {
      currentFrameScores[currentFrame - 2] = threeFramesAgo + 20 + currentPins;
      setFrameScores(currentFrameScores);
    }

    // If strike
    if (currentPins === 10) {
      currentFrameScores[currentFrame] === 'strike';
      setFrameScores(currentFrameScores);
      // Move onto next frame
      currentRoll = -1;
    }
  }

  // After second roll
  if (currentRoll === 1) {
    let prevPins = currentPins[currentFrame][0];
    let total = currentPins + prevPins

    // If previous frame was a strike
    if (lastFrame === 'strike') {
      lastFrame = currentFrameScores[currentFrame - 1] = twoFramesAgo + 10 + total;
      setFrameScores(currentFrameScores);
    }

    // If spare
    if (total === 10) {
      currentFrameScores[currentFrame] === 'spare';
      setFrameScores(currentFrameScores);
    } else {
      currentFrameScores[currentFrame] = currentFrameScores[currentFrame - 1] + total;
      setFrameScores(currentFrameScores);
    }
  }
}