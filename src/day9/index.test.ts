import { solve } from "./index.ts";
import { readAll } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D9P1: Example Input",
  fn: () => {
    const input = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
    const sol = solve(input);
    assertEquals(sol, 13);
  },
});

Deno.test({
  name: "D9P1: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 6494);
  },
});

Deno.test({
  name: "D9P2: Example Input",
  fn: () => {
    const input = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
    const sol = solve(input, true);
    assertEquals(sol, 1);
  },
});
Deno.test({
  name: "D9P2: Example Input 2",
  fn: () => {
    const input = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];
    const sol = solve(input, true);
    assertEquals(sol, 36);
  },
});

Deno.test({
  name: "D9P2: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 2691);
  },
});
