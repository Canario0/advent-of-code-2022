import { solve } from "./index.ts";
import { readAll } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D4P1: Example Input",
  fn: () => {
    const input = [
      "2-4,6-8",
      "2-3,4-5",
      "5-7,7-9",
      "2-8,3-7",
      "6-6,4-6",
      "2-6,4-8",
    ];
    const sol = solve(input);
    assertEquals(sol, 2);
  },
});

Deno.test({
  name: "D4P1: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 305);
  },
});

Deno.test({
  name: "D4P2: Example Input",
  fn: () => {
    const input = [
      "2-4,6-8",
      "2-3,4-5",
      "5-7,7-9",
      "2-8,3-7",
      "6-6,4-6",
      "2-6,4-8",
    ];
    const sol = solve(input, true);
    assertEquals(sol, 4);
  },
});

Deno.test({
  name: "D4P2: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 811);
  },
});
