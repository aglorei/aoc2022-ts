import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((row) => row.split("").map(Number));

const part1 = (rawInput: string) => {
  const grid = parseInput(rawInput);
  let visibleTreesCount = grid.length * 2 + grid[0].length * 2 - 4;
  for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[y].length - 1; x++) {
      let candidate = grid[y][x];

      // east edge visibility
      if (Math.max(...grid[y].slice(x + 1)) < candidate) {
        visibleTreesCount++;
        continue;
      }

      // west edge visibility
      if (Math.max(...grid[y].slice(0, x)) < candidate) {
        visibleTreesCount++;
        continue;
      }

      // south edge visibility
      if (Math.max(...grid.slice(y + 1).map((row) => row[x])) < candidate) {
        visibleTreesCount++;
        continue;
      }

      // north edge visibility
      if (Math.max(...grid.slice(0, y).map((row) => row[x])) < candidate) {
        visibleTreesCount++;
        continue;
      }
    }
  }
  return visibleTreesCount;
};

const part2 = (rawInput: string) => {
  const grid = parseInput(rawInput);
  let maxScore = 0;

  for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[y].length - 1; x++) {
      let candidate = grid[y][x];

      // east edge visibility
      const eastView = grid[y].slice(x + 1);
      let east = 0;
      for (let i = 0; i < eastView.length; i++) {
        east += 1;
        if (eastView[i] >= candidate) break;
      }

      // west edge visibility
      const westView = grid[y].slice(0, x).reverse();
      let west = 0;
      for (let i = 0; i < westView.length; i++) {
        west += 1;
        if (westView[i] >= candidate) break;
      }

      // south edge visibility
      const southView = grid.slice(y + 1).map((row) => row[x]);
      let south = 0;
      for (let i = 0; i < southView.length; i++) {
        south += 1;
        if (southView[i] >= candidate) break;
      }

      // north edge visibility
      const northView = grid
        .slice(0, y)
        .map((row) => row[x])
        .reverse();
      let north = 0;
      for (let i = 0; i < northView.length; i++) {
        north += 1;
        if (northView[i] >= candidate) break;
      }

      const score = east * west * south * north;
      if (score > maxScore) maxScore = score;
    }
  }

  return maxScore;
};

const testInput = `
30373
25512
65332
33549
35390
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 21,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 8,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
