function computePriority(item: string): number {
  const charValue = item.charCodeAt(0);
  const modifier = charValue >= 97 ? 96 : 38;
  return charValue - modifier;
}

export function solve(compartments: string[]): number {
  return compartments
    .reduce((acc: string[][], item: string, index: number) => {
      const newIndex = Math.floor(index / 3);
      if (acc[newIndex] == null) {
        acc[newIndex] = [];
      }
      acc[newIndex].push(item);
      return acc;
    }, [])
    .reduce(
      (
        acc: number,
        [firstCompartment, secondCompartment, thirdCompartment]: string[]
      ) => {
        const set2 = new Set(secondCompartment);
        const set3 = new Set(thirdCompartment);
        const item = firstCompartment
          .split("")
          .filter((item) => set2.has(item))
          .filter((item) => set3.has(item))[0];
        return acc + computePriority(item);
      },
      0
    );
}
