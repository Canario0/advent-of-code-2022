type GameOutcome = "win" | "lost" | "draw";

const outcomeScores = new Map([
  ["win", 6],
  ["draw", 3],
  ["lost", 0],
]);

const shapeScores = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3],
]);

function computeScore(outcome: GameOutcome, shape: string) {
  return (outcomeScores.get(outcome) ?? 0) + (shapeScores.get(shape) ?? 0);
}

function computeMyShape(outcome: GameOutcome, oponentShape: string): string {
  switch (outcome) {
    case "win":
      if (oponentShape === "A") return "B";
      if (oponentShape === "B") return "C";
      if (oponentShape === "C") return "A";
      break;
    case "draw":
      return oponentShape;
    case "lost":
      if (oponentShape === "A") return "C";
      if (oponentShape === "B") return "A";
      if (oponentShape === "C") return "B";
      break;
  }
  throw new Error("Unexpected result estimation");
}

function normalizeResult(result: string): GameOutcome {
  switch (result) {
    case "X":
      return "lost";
    case "Y":
      return "draw";
    case "Z":
      return "win";
  }
  throw new Error("Unexpected result estimation");
}

export function solve(scriptedPlay: string[][]): number {
  return scriptedPlay.reduce((acc, [oponentShape, rawOutCome]) => {
    const outcome = normalizeResult(rawOutCome);
    const myShape = computeMyShape(outcome, oponentShape);
    return acc + computeScore(outcome, myShape);
  }, 0);
}
