export function solve(caloriesCarriedByElf: number[][]): number {
  const addCaloriesByElf = caloriesCarriedByElf
    .map((caloriesGrouped) =>
      caloriesGrouped.reduce((acc, calories) => acc + calories, 0)
    )
    .sort((a, b) => b - a);
  return addCaloriesByElf.slice(0, 3).reduce((acc, calories) => acc + calories);
}
