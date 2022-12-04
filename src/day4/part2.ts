function rangeOverlap(range: number[], otherRange: number[]): boolean {
  return Math.max(range[0], otherRange[0]) <= Math.min(range[1], otherRange[1]);
}

export function solve(sections: number[][][]): number {
  return sections.filter(([section, otherSection]) =>
    rangeOverlap(section, otherSection)
  ).length;
}
