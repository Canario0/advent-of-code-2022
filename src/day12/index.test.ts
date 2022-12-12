import { solve } from "./index.ts";
import { fileRead, readAll } from "../utils.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "D12P1: Example Input",
  fn: () => {
    const input = ["Sabqponm", "abcryxxl", "accszExk", "acctuvwj", "abdefghi"];
    const sol = solve(input);
    assertEquals(sol, 31);
  },
});

Deno.test({
  name: "D12P1: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input);
    assertEquals(sol, 472);
  },
});

Deno.test({
  name: "D12P2: Example Input",
  fn: () => {
    const input = ["Sabqponm", "abcryxxl", "accszExk", "acctuvwj", "abdefghi"];
    const sol = solve(input, true);
    assertEquals(sol, 29);
  },
});

Deno.test({
  name: "D12P2: Actual Input",
  fn: () => {
    const input = readAll(`${new URL(".", import.meta.url).pathname}/input`);
    const sol = solve(input, true);
    assertEquals(sol, 465);
  },
});
