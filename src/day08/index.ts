import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((row) => row.split("").map(Number));

const clearViewCount = (trees: number[], candidate: number) => {
  let count = 0;
  for (const tree of trees) {
    count += 1;
    if (tree >= candidate) break;
  }
  return count;
};

const part1 = (rawInput: string) => {
  const grid = parseInput(rawInput);
  let visibleTreesCount = grid.length * 2 + grid[0].length * 2 - 4;
  for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[y].length - 1; x++) {
      let candidate = grid[y][x];

      if (
        Math.max(...grid[y].slice(x + 1)) < candidate || // east edge visibility
        Math.max(...grid[y].slice(0, x)) < candidate || // west edge visibility
        Math.max(...grid.slice(y + 1).map((row) => row[x])) < candidate || // south edge visibility
        Math.max(...grid.slice(0, y).map((row) => row[x])) < candidate // north edge visibility
      ) {
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

      const score = [
        grid[y].slice(x + 1), // east edge visibility
        grid[y].slice(0, x).reverse(), // west edge visibility
        grid.slice(y + 1).map((row) => row[x]), // south edge visibility
        grid
          .slice(0, y)
          .map((row) => row[x])
          .reverse(), // north edge visibility
      ].reduce((acc, trees) => (acc *= clearViewCount(trees, candidate)), 1);

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
