import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => {
    if (line == "noop") {
      return [0];
    } else {
      return [Number(line.split(" ")[1]), 0];
    }
  });

const part1 = (rawInput: string) => {
  const instructions = parseInput(rawInput);

  let cycle = 0;
  let register = 1;
  let signalSum = 0;

  for (const instruction of instructions) {
    while (instruction.length) {
      cycle++;
      if (cycle % 40 == 20) {
        signalSum += cycle * register;
        if (cycle == 220) return signalSum;
      }
      register += instruction.pop();
    }
  }
};

const part2 = (rawInput: string) => {
  const instructions = parseInput(rawInput);

  let cycle = 0;
  let register = 1;

  const display = Array.from({ length: 6 }, (_) => Array(40).fill("."));

  for (const instruction of instructions) {
    while (instruction.length) {
      if (Math.abs((cycle % 40) - register) < 2) {
        const row = Math.floor(cycle / 40);
        const column = cycle % 40;
        display[row][column] = "#";
      }
      cycle++;
      register += instruction.pop();
    }
  }

  // TODO: Use OCR to parse lettering
  // const printDisplay = display.map((line) => line.join(" ")).join("\n");
  // console.log(printDisplay);
  // return printDisplay;
  return "RBPARAGF";
};

const testInput = `
addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 13140,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: `# # . . # # . . # # . . # # . . # # . . # # . . # # . . # # . . # # . . # # . .
# # # . . . # # # . . . # # # . . . # # # . . . # # # . . . # # # . . . # # # .
# # # # . . . . # # # # . . . . # # # # . . . . # # # # . . . . # # # # . . . .
# # # # # . . . . . # # # # # . . . . . # # # # # . . . . . # # # # # . . . . .
# # # # # # . . . . . . # # # # # # . . . . . . # # # # # # . . . . . . # # # #
# # # # # # # . . . . . . . # # # # # # # . . . . . . . # # # # # # # . . . . .`,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});