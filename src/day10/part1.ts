export const cycles = new Set([20, 60, 100, 140, 180, 220]);

export interface Command {
  type: string;
  units?: number;
}

interface State {
  registerX: number;
  signalStrength: number;
  cycle: number;
}

function signalStrength(cycle: number, unit: number, oldSignal: number) {
  if (cycles.has(cycle)) {
    return oldSignal + cycle * unit;
  }
  return oldSignal;
}

function reducer(state: State, { type, units }: Command): State {
  const newState = { ...state };
  switch (type) {
    case "noop":
      newState.cycle = state.cycle + 1;
      newState.signalStrength = signalStrength(
        newState.cycle,
        newState.registerX,
        state.signalStrength
      );
      break;
    case "addx":
      newState.cycle = state.cycle + 2;
      newState.signalStrength = signalStrength(
        state.cycle + 1,
        state.registerX,
        state.signalStrength
      );
      newState.signalStrength = signalStrength(
        newState.cycle,
        newState.registerX,
        newState.signalStrength
      );
      newState.registerX = state.registerX + units!;
      break;
  }
  return newState;
}

export function solve(commands: string[]): number {
  const initialState = {
    registerX: 1,
    signalStrength: 0,
    cycle: 0,
  };
  return commands.reduce((state, command: string) => {
    const commandSplitted = command.split(" ");
    return reducer(state, {
      type: commandSplitted[0],
      units: Number(commandSplitted[1]),
    });
  }, initialState).signalStrength;
}
