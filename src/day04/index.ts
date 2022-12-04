import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((pair) =>
    pair.split(",").map((assignment) => {
      assignment = assignment.split("-").map(Number);
      return new Set(
        Array.from(
          { length: 1 + assignment[1] - assignment[0] },
          (_, i) => i + assignment[0],
        ),
      );
    }),
  );

const part1 = (rawInput: string) => {
  return parseInput(rawInput).reduce((acc, assignments) => {
    const subsetBoolean =
      [...assignments[0]].every((seat) => assignments[1].has(seat)) ||
      [...assignments[1]].every((seat) => assignments[0].has(seat));
    return (acc += Number(subsetBoolean));
  }, 0);
};

const part2 = (rawInput: string) => {
  return parseInput(rawInput).reduce((acc, assignments) => {
    const subsetBoolean =
      [...assignments[0]].some((seat) => assignments[1].has(seat)) ||
      [...assignments[1]].some((seat) => assignments[0].has(seat));
    return (acc += Number(subsetBoolean));
  }, 0);
};

const testInput = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
