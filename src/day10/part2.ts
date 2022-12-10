interface Command {
  type: string;
  units?: number;
}

interface State {
  registerX: number;
  cycle: number;
  screen: string[][];
}

function draw(state: State) {
  const i = Math.floor((state.cycle - 1) / 40);
  const j = Math.floor((state.cycle - 1) % 40);
  if (state.registerX - 1 <= j && j <= state.registerX + 1) {
    state.screen[i][j] = "#";
  }
}

function reducer(state: State, { type, units }: Command): State {
  const newState = {
    ...state,
    screen: [...state.screen].map((array) => [...array]),
  };
  switch (type) {
    case "noop":
      newState.cycle = state.cycle + 1;
      draw(newState);
      break;
    case "addx":
      newState.cycle = state.cycle + 1;
      draw(newState);
      newState.cycle = newState.cycle + 1;
      draw(newState);
      newState.registerX = state.registerX + units!;
      break;
  }
  return newState;
}

export function solve(commands: string[]) {
  const initialState: State = {
    registerX: 1,
    cycle: 0,
    screen: Array(6)
      .fill("")
      .map(() => Array(40).fill(".")),
  };
  commands
    .reduce((state, command: string) => {
      const commandSplitted = command.split(" ");
      return reducer(state, {
        type: commandSplitted[0],
        units: Number(commandSplitted[1]),
      });
    }, initialState)
    .screen.forEach((array) => console.log(...array));
}
