const MARKER_SIZE = 4;

export function solve(signal: string): number {
  const signalChars = signal.split("");
  // CAVEAT: this code was totally focus on find the marker
  // and not the amount of characters (because I did not
  // read the full problem) so it may be not efficient but
  // it simply works.
  const marker = [
    ...(signalChars
      .reduce((acc: Set<string>[], _, i: number) => {
        if (i + MARKER_SIZE >= signalChars.length) {
          return acc;
        }
        acc.push(new Set(signalChars.slice(i, i + MARKER_SIZE)));
        return acc;
      }, [] as Set<string>[])
      .find((set: Set<string>) => set.size === MARKER_SIZE)
      ?.values() ?? []),
  ].join("");

  return signal.search(marker) + MARKER_SIZE;
}
