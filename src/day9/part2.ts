import {
  Command,
  Distance,
  directions,
  computeTailPositionBaseOnHeadPosition,
} from "./part1.ts";

interface State {
  tails: Distance[];
  headPosition: Distance;
  tailVisited: Set<string>;
}

function reducer(state: State, { type, units }: Command): State {
  const directionConstant = directions.get(type)!;
  for (let unit = 0; unit < units; unit++) {
    state.headPosition = {
      i: state.headPosition.i + directionConstant[0],
      j: state.headPosition.j + directionConstant[1],
    };
    state.tails = state.tails.reduce((acc, tail, i) => {
      const currentHead = i === 0 ? state.headPosition : acc[i - 1];
      acc.push(computeTailPositionBaseOnHeadPosition(currentHead, tail));
      return acc;
    }, [] as Distance[]);
    state.tailVisited.add(`${state.tails.at(-1)!.i},${state.tails.at(-1)!.j}`);
  }
  return state;
}

export function solve(commands: [string, number][]): number {
  const initialState: State = {
    tails: Array(9)
      .fill("")
      .map(() => {
        return {
          i: 0,
          j: 0,
        };
      }),
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
