import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const input = rawInput.split("\n");
  const dividerIdx = input.indexOf("");

  const crates = input[dividerIdx - 1]
    .trim()
    .split("   ")
    .map((crateNumber) => {
      let crate = [];
      for (let i = dividerIdx - 2; i > -1; i--) {
        const letter = input[i][Number(crateNumber) * 4 - 3];
        if (letter != " ") crate.push(letter);
      }
      return crate;
    });

  const moves = input.slice(dividerIdx + 1).map((line) => {
    const move = line.split(" ");
    return {
      quantity: Number(move[1]),
      from: Number(move[3]) - 1,
      to: Number(move[5]) - 1,
    };
  });

  return { crates: crates, moves: moves };
};

const part1 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  for (let move of parsedInput.moves) {
    for (let i = 0; i < move.quantity; i++) {
      parsedInput.crates[move.to].push(parsedInput.crates[move.from].pop());
    }
  }
  return parsedInput.crates.map((crate) => crate.pop()).join("");
};

const part2 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  for (let move of parsedInput.moves) {
    let buffer = [];
    for (let i = 0; i < move.quantity; i++) {
      buffer.push(parsedInput.crates[move.from].pop());
    }
    for (let i = 0; i < move.quantity; i++) {
      parsedInput.crates[move.to].push(buffer.pop());
    }
  }
  return parsedInput.crates.map((crate) => crate.pop()).join("");
};

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: "CMZ",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: "MCD",
      },
    ],
    solution: part2,
  },
  trimTestInputs: false,
  onlyTests: false,
});
