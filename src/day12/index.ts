import run from "aocrunner";

const getElevation = (letter: string) =>
  letter == "S" ? 0 : letter == "E" ? 25 : letter.charCodeAt(0) - 97;

const getStartNodes = (rawInput: string) => {
  let startNodes = [];

  const heightMap = rawInput.split("\n").map((line, rowIdx) =>
    line.split("").map((letter, columnIdx) => {
      const node = {
        height: getElevation(letter),
        nextNodes: [],
        steps: 0,
        start: letter == "S",
        end: letter == "E",
      };
      if (node.height == 0) startNodes.push(node);
      return node;
    }),
  );

  const rowDimension = heightMap.length - 1;
  const columnDimension = heightMap[0].length - 1;

  for (const rowIdx in heightMap) {
    for (const columnIdx in heightMap[rowIdx]) {
      const current = heightMap[rowIdx][columnIdx];
      current.nextNodes = [
        [0, -1], // up
        [1, 0], // right
        [0, 1], // down
        [-1, 0], // left
      ].reduce((acc, direction) => {
        const targetRowIdx = Number(rowIdx) + direction[0];
        const targetColumnIdx = Number(columnIdx) + direction[1];

        if (
          targetRowIdx < 0 ||
          targetRowIdx > rowDimension ||
          targetColumnIdx < 0 ||
          targetColumnIdx > columnDimension
        )
          return acc;

        const target = heightMap[targetRowIdx][targetColumnIdx];
        if (
          current.height >= target.height ||
          target.height - current.height == 1
        )
          acc.push(target);

        return acc;
      }, []);
    }
  }

  return startNodes;
};

// TODO: Correctly annontate type
const bfsPathSteps = (startNode) => {
  const queue = [startNode];
  const inspected = [];

  while (queue.length) {
    const current = queue.shift();
    if (inspected.includes(current)) continue;
    inspected.push(current);

    if (current.end) {
      const steps = current.steps;
      for (const node of inspected) node.steps = 0;
      return steps;
    }

    for (const node of current.nextNodes) {
      node.steps = current.steps + 1;
      if (inspected.includes(current)) queue.push(node);
    }
  }

  for (const node of inspected) node.steps = 0;
};

const part1 = (rawInput: string) => {
  return bfsPathSteps(getStartNodes(rawInput).filter((node) => node.start)[0]);
};

const part2 = (rawInput: string) => {
  return Math.min(
    ...getStartNodes(rawInput)
      .map(bfsPathSteps)
      .filter((steps) => steps != undefined),
  );
};

const testInput = `
Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 31,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 29,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
