import { solve } from "./index.ts";
import { fileRead } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D1P1: Example Input",
  fn: () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
    const sol = solve(input);
    assertEquals(sol, 24000);
  },
});

Deno.test({
  name: "D1P1: Actual Input",
  fn: () => {
    const input = fileRead(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 67633);
  },
});

Deno.test({
  name: "D1P2: Example Input",
  fn: () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
    const sol = solve(input, true);
    assertEquals(sol, 45000);
  },
});

Deno.test({
  name: "D1P2: Actual Input",
  fn: () => {
    const input = fileRead(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 199628);
  },
});
