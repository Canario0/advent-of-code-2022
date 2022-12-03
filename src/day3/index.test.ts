import { solve } from "./index.ts";
import { readAll } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D3P1: Example Input",
  fn: () => {
    const input = [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ];
    const sol = solve(input);
    assertEquals(sol, 157);
  },
});

Deno.test({
  name: "D3P1: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 7737);
  },
});

Deno.test({
  name: "D3P2: Example Input",
  fn: () => {
    const input = [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ];
    const sol = solve(input, true);
    assertEquals(sol, 70);
  },
});

Deno.test({
  name: "D3P2: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 2697);
  },
});
