# Advent of code 2022

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![](https://img.shields.io/badge/day%20📅-25-blue)
![](https://img.shields.io/badge/stars%20⭐-16-yellow)
![](https://img.shields.io/badge/days%20completed-8-red)

Repository of solutions for the [Advent of Code 2022][4] done by [Canario0][1]

This year I want to keep testing/learning Typescript with deno [Deno][2]. Check the
repository of the [Advent of Code 2020][9].

## Usage

### Prerequisites

You may need to [install deno][3] to use this repository.

### Test day solutions

All of the day solutions have unit tests. To run them use
[deno built-in test runner][5]:

```
$ deno test [OPTIONS] [file]
```

Some of the test need `--allow-read` to read the sample inputs of its day.

## Repository content

The source code of the repository is inside the `src` path:

### Folder

```
/ src
├- dayX: problem solutions and test
└- utils.ts: some usefull methods used in all day solutions.
```

## Built with

- [Typescript][6] - Language used
- [Deno][2] - Runtime for Javascript and Typescript

## Authors

- Pablo Renero Balgañón [@Canario0][1]

## License

This repository is under MIT License - look up [LICENSE](./LICENSE) for more
details

[1]: https://github.com/Canario0
[2]: https://deno.land/
[3]: https://deno.land/#installation
[4]: https://adventofcode.com/2022
[5]: https://deno.land/manual/testing
[6]: https://www.typescriptlang.org/
[8]: https://deno.land/manual@v1.6.0/tools/bundler
[9]: https://github.com/Canario0/advent-of-code-2020 
