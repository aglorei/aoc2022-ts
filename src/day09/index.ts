import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((motion) => motion.split(" "));

const compass = {
  U: [0, 1],
  R: [1, 0],
  D: [0, -1],
  L: [-1, 0],
};

const moveToHead = (head: number[], tail: number[]) => {
  const moves = head.map((coord, idx) => coord - tail[idx]);
  const absMoves = moves.map(Math.abs);

  if (absMoves.reduce((acc, step) => (acc += step), 0) == 3) {
    const longIdx = absMoves.indexOf(2);
    moves[1 - longIdx] += Math.sign(moves[1 - longIdx]);
  }

  tail = tail.map(
    (coord, idx) => Math.sign(moves[idx]) * -1 + moves[idx] + coord,
  );

  return tail;
};

const part1 = (rawInput: string) => {
  const motions = parseInput(rawInput);

  let head = [0, 0];
  let tail = [0, 0];
  const tailPositions = new Set(["0,0"]);

  for (const motion of motions) {
    const direction = motion[0];
    let steps = Number(motion[1]);

    while (steps) {
      head = head.map((coord, idx) => compass[direction][idx] + coord);
      steps--;
      tail = moveToHead(head, tail);
      tailPositions.add(tail.join(","));
    }
  }
  return tailPositions.size;
};

const part2 = (rawInput: string) => {
  const motions = parseInput(rawInput);

  let head = [0, 0];
  let tails = Array(9).fill([0, 0]);
  const tailPositions = new Set(["0,0"]);

  for (const motion of motions) {
    const direction = motion[0];
    let steps = Number(motion[1]);

    while (steps) {
      head = head.map((coord, idx) => compass[direction][idx] + coord);
      steps--;

      let next = head;
      for (let i = 0; i < tails.length; i++) {
        tails[i] = moveToHead(next, tails[i]);
        next = tails[i];
      }
      tailPositions.add(tails[8].join(","));
    }
  }
  return tailPositions.size;
};

const testInputShort = `
R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2
`;

const testInputLong = `
R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20
`;

run({
  part1: {
    tests: [
      {
        input: testInputShort,
        expected: 13,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInputShort,
        expected: 1,
      },
      {
        input: testInputLong,
        expected: 36,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
