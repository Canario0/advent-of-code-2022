import { solve } from "./index.ts";
import { fileRead } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D6P1: Example Input",
  fn: () => {
    let input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
    let sol = solve(input);
    assertEquals(sol, 7);

    input = "bvwbjplbgvbhsrlpgdmjqwftvncz";
    sol = solve(input);
    assertEquals(sol, 5);
  },
});

Deno.test({
  name: "D6P1: Actual Input",
  fn: () => {
    const input = fileRead(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 1855);
  },
});

Deno.test({
  name: "D6P2: Example Input",
  fn: () => {
    const input = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
    const sol = solve(input, true);
    assertEquals(sol, 19);
  },
});

Deno.test({
  name: "D6P2: Actual Input",
  fn: () => {
    const input = fileRead(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 3256);
  },
});
