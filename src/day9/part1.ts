export const directions = new Map([
  ["R", [0, 1]],
  ["L", [0, -1]],
  ["U", [1, 0]],
  ["D", [-1, 0]],
]);

export interface Command {
  type: string;
  units: number;
}

export interface Distance {
  i: number;
  j: number;
}

interface State {
  tailPosition: Distance;
  headPosition: Distance;
  tailVisited: Set<string>;
}

export function computeTailPositionBaseOnHeadPosition(
  headPosition: Distance,
  tailPosition: Distance
): Distance {
  const diff = {
    i: headPosition.i - tailPosition.i,
    j: headPosition.j - tailPosition.j,
  };
  let resultPosition = tailPosition;
  if (diff.i === 0 && Math.abs(diff.j) === 2) {
    resultPosition = {
      i: tailPosition.i,
      j: diff.j > 0 ? tailPosition.j + 1 : tailPosition.j - 1,
    };
  }
  if (Math.abs(diff.i) === 2 && diff.j === 0) {
    resultPosition = {
      i: diff.i > 0 ? tailPosition.i + 1 : tailPosition.i - 1,
      j: tailPosition.j,
    };
  }
  if (diff.i === 2 && diff.j !== 0) {
    resultPosition = {
      i: tailPosition.i + 1,
      j: diff.j > 0 ? tailPosition.j + 1 : tailPosition.j - 1,
    };
  }
  if (diff.i === -2 && diff.j !== 0) {
    resultPosition = {
      i: tailPosition.i - 1,
      j: diff.j > 0 ? tailPosition.j + 1 : tailPosition.j - 1,
    };
  }
  if (diff.j === 2 && diff.i !== 0) {
    resultPosition = {
      i: diff.i > 0 ? tailPosition.i + 1 : tailPosition.i - 1,
      j: tailPosition.j + 1,
    };
  }
  if (diff.j === -2 && diff.i !== 0) {
    resultPosition = {
      i: diff.i > 0 ? tailPosition.i + 1 : tailPosition.i - 1,
      j: tailPosition.j - 1,
    };
  }
  return resultPosition;
}

function reducer(state: State, { type, units }: Command): State {
  const directionConstant = directions.get(type)!;
  for (let unit = 0; unit < units; unit++) {
    state.headPosition = {
      i: state.headPosition.i + directionConstant[0],
      j: state.headPosition.j + directionConstant[1],
    };
    state.tailPosition = computeTailPositionBaseOnHeadPosition(
      state.headPosition,
      state.tailPosition
    );
    state.tailVisited.add(`${state.tailPosition.i},${state.tailPosition.j}`);
  }
  return state;
}

export function solve(commands: [string, number][]): number {
  const initialState: State = {
    tailPosition: {
      i: 0,
      j: 0,
    },
    headPosition: {
      i: 0,
      j: 0,
    },
    tailVisited: new Set<string>(["0,0"]),
  };

  return commands.reduce(
    (state, [command, units]) => reducer(state, { type: command, units }),
    initialState
  ).tailVisited.size;
}
