function rangeContains(range: number[], otherRange: number[]): boolean {
  return range[0] >= otherRange[0] && range[1] <= otherRange[1];
}

export function solve(sections: number[][][]): number {
  return sections.filter(
    ([section, otherSection]) =>
      rangeContains(section, otherSection) ||
      rangeContains(otherSection, section)
  ).length;
}
