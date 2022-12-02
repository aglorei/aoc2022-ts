import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const chooseShapeScores = {
  "A X": 4,
  "B X": 1,
  "C X": 7,
  "A Y": 8,
  "B Y": 5,
  "C Y": 2,
  "A Z": 3,
  "B Z": 9,
  "C Z": 6,
};

const chooseOutcomeScores = {
  "A X": 3,
  "B X": 1,
  "C X": 2,
  "A Y": 4,
  "B Y": 5,
  "C Y": 6,
  "A Z": 8,
  "B Z": 9,
  "C Z": 7,
};

const part1 = (rawInput: string) => {
  return parseInput(rawInput).reduce(
    (acc, outcome) => (acc += chooseShapeScores[outcome]),
    0,
  );
};

const part2 = (rawInput: string) => {
  return parseInput(rawInput).reduce(
    (acc, outcome) => (acc += chooseOutcomeScores[outcome]),
    0,
  );
};

const testInput = `
A Y
B X
C Z
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
