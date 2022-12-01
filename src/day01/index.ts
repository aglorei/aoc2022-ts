import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const sums = input
    .split("\n\n")
    .map((group) => group.split("\n"))
    .map((group) => group.reduce((acc, calorie) => acc + Number(calorie), 0));
  return Math.max(...sums);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const sums = input
    .split("\n\n")
    .map((group) => group.split("\n"))
    .map((group) => group.reduce((acc, calorie) => acc + Number(calorie), 0));
  return sums
    .sort()
    .slice(0, 3)
    .reduce((acc, calories) => acc + calories, 0);
};

run({
  part1: {
    tests: [
      {
        input: `
        1000
        2000
        3000

        4000

        5000
        6000

        7000
        8000
        9000

        10000
        `,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        1000
        2000
        3000

        4000

        5000
        6000

        7000
        8000
        9000

        10000
        `,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
