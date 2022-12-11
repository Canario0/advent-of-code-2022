abstract class Monkey {
  public inspectionCount = 0;
  public items: number[];
  protected newLevel!: (old: number) => number;

  public constructor(items: number[]) {
    this.items = items;
  }
  public inspect(): void {
    if (!this.items.length) {
      return;
    }
    this.items[0] = Math.floor(this.newLevel(this.items[0]) / 3);
    this.inspectionCount++;
  }

  public addItem(item: number) {
    this.items.push(item);
  }
  abstract throw(): [number, number];
}

function monkeyFactory(
  items: number[],
  operation: string,
  throwDecision: number,
  trueThrow: number,
  falseThrow: number
): Monkey {
  const newLevelFormula = (old: number): number => eval(operation);
  return new (class extends Monkey {
    protected newLevel = newLevelFormula;

    constructor(items: number[]) {
      super(items);
    }

    public throw(): [number, number] {
      const worryLevel = this.items.shift()!;
      return worryLevel % throwDecision === 0
        ? [trueThrow, worryLevel]
        : [falseThrow, worryLevel];
    }
  })(items);
}

export function solve(commands: string[][]): number {
  const monkeys: Monkey[] = commands.map(
    ([_, rawItems, rawOperation, rawTest, rawTrue, rawFalse]) => {
      const items = rawItems
        .split(": ")[1]
        .split(", ")
        .map((value) => Number(value));
      const operation = rawOperation.split("= ")[1];
      return monkeyFactory(
        items,
        operation,
        Number(rawTest.split(" ").at(-1)),
        Number(rawTrue.split(" ").at(-1)),
        Number(rawFalse.split(" ").at(-1))
      );
    }
  );
  for (let round = 0; round < 20; round++) {
    for (const monkey of monkeys) {
      while (monkey.items.length > 0) {
        monkey.inspect();
        const [monkeyNumber, worryLevel] = monkey.throw();
        monkeys[monkeyNumber].addItem(worryLevel);
      }
    }
  }
  return monkeys
    .map((monkey) => monkey.inspectionCount)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, value) => acc * value, 1);
}
