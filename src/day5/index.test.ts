import { solve } from "./index.ts";
import { fileRead } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D5P1: Example Input",
  fn: () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    const sol = solve(input);
    assertEquals(sol, "CMZ");
  },
});

Deno.test({
  name: "D5P1: Actual Input",
  fn: () => {
    const input = fileRead(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, "TWSGQHNHL");
  },
});

Deno.test({
  name: "D5P2: Example Input",
  fn: () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    const sol = solve(input, true);
    assertEquals(sol, "MCD");
  },
});

Deno.test({
  name: "D5P2: Actual Input",
  fn: () => {
    const input = fileRead(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, "JNRSCDWPP");
  },
});
