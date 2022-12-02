type GameOutcome = "win" | "lost" | "draw";

const outcomeScores = new Map([
  ["win", 6],
  ["draw", 3],
  ["lost", 0],
]);

const shapeScores = new Map([
  ["X", 1],
  ["Y", 2],
  ["Z", 3],
]);

function computeScore(outcome: GameOutcome, shape: string) {
  return (outcomeScores.get(outcome) ?? 0) + (shapeScores.get(shape) ?? 0);
}

function playRound(myShape: string, oponentShape: string): GameOutcome {
  if (myShape === oponentShape) {
    return "draw";
  }
  switch (myShape) {
    case "X":
      if (oponentShape === "Z") return "win";
      break;
    case "Y":
      if (oponentShape === "X") return "win";
      break;
    case "Z":
      if (oponentShape === "Y") return "win";
      break;
  }
  return "lost";
}

function normalizeShape(shape: string) {
  switch (shape) {
    case "A":
      return "X";
    case "B":
      return "Y";
    case "C":
      return "Z";
    default:
      return shape;
  }
}

export function solve(scriptedPlay: string[][]): number {
  return scriptedPlay.reduce((acc, [oponentShape, myShape]) => {
    const outcome = playRound(myShape, normalizeShape(oponentShape));
    return acc + computeScore(outcome, myShape);
  }, 0);
}
