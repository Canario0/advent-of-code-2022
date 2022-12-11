const monkeyDenomintors: number[] = [];

function lcm(...arr: number[]): number {
  const gcd = (x: number, y: number): number => (!y ? x : gcd(y, x % y));
  const _lcm = (x: number, y: number) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
}

abstract class Monkey {
  public inspectionCount = 0;
  public items: number[];
  protected newLevel!: (old: number) => number;
  static lcm: number;

  public constructor(items: number[]) {
    this.items = items;
  }
  public inspect(): void {
    if (!this.items.length) {
      return;
    }
    this.items[0] = this.newLevel(this.items[0]) % Monkey.lcm;
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
  const [v1, operator, v2] = operation.trim().split(" ");
  const newLevelFormula = (old: number): number => {
    const value1 = v1 === "old" ? old : Number(v1);
    const value2 = v2 === "old" ? old : Number(v2);
    if (operator === "+") {
      return value1 + value2;
    }
    return value1 * value2;
  };

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
      const items = rawItems .split(": ")[1]
        .split(", ")
        .map((value) => Number(value));
      const operation = rawOperation.split("= ")[1];
      const denominator = Number(rawTest.split(" ").at(-1));
      monkeyDenomintors.push(denominator);
      return monkeyFactory(
        items,
        operation,
        denominator,
        Number(rawTrue.split(" ").at(-1)),
        Number(rawFalse.split(" ").at(-1))
      );
    }
  );
  Monkey.lcm = lcm(...monkeyDenomintors);
  console.log(Monkey.lcm)
  for (let round = 0; round < 10000; round++) {
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
