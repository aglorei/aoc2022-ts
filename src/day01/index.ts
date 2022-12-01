import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput
    .split("\n\n")
    .map((group) => group.split("\n"))
    .map((group) => group.reduce((acc, calorie) => acc + Number(calorie), 0));

const part1 = (rawInput: string) => {
  return Math.max(...parseInput(rawInput));
};

const part2 = (rawInput: string) => {
  return parseInput(rawInput)
    .sort((first, second) => (first > second ? -1 : 1))
    .slice(0, 3)
    .reduce((acc, calorie) => acc += calorie, 0);
};

const testInput = `
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
`

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
