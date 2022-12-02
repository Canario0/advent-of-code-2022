import { solve } from "./index.ts";
import { readAll } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D2P1: Example Input",
  fn: () => {
    const input = ["A Y", "B X", "C Z"];
    const sol = solve(input);
    assertEquals(sol, 15);
  },
});

Deno.test({
  name: "D2P1: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 12645);
  },
});

Deno.test({
  name: "D2P2: Example Input",
  fn: () => {
    const input = ["A Y", "B X", "C Z"];
    const sol = solve(input, true);
    assertEquals(sol, 12);
  },
});

Deno.test({
  name: "D2P2: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 11756);
  },
});
