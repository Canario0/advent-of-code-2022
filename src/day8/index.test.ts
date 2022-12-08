import { solve } from "./index.ts";
import { fileRead, readAll } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D8P1: Example Input",
  fn: () => {
    const input = ["30373", "25512", "65332", "33549", "35390"];
    const sol = solve(input);
    assertEquals(sol, 21);
  },
});

Deno.test({
  name: "D8P1: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 1717);
  },
});

Deno.test({
  name: "D8P2: Example Input",
  fn: () => {
    const input = ["30373", "25512", "65332", "33549", "35390"];
    const sol = solve(input, true);
    assertEquals(sol, 8);
  },
});

Deno.test({
  name: "D8P2: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 321975);
  },
});
