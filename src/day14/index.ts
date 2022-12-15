import run from "aocrunner";

// const growCave = (cave: Array<string>, xGap: number, yGap: number) => {
//   if (xGap < 0) {
//     cave = cave.map((line) =>
//       Array.from({ length: Math.abs(xGap) }, (_) => ".").concat(line),
//     );
//   } else if (xGap > cave[0].length - 1) {
//     cave = cave.map((line) =>
//       line.concat(
//         Array.from({ length: Math.abs(cave[0].length - 1 - xGap) }, (_) => "."),
//       ),
//     );
//   }

//   if (yGap) {
//     cave = cave.concat(
//       Array.from({ length: yGap }, (_) =>
//         Array.from({ length: cave[0].length }, (_) => "."),
//       ),
//     );
//   }

//   return cave;
// };

const buildCave = (rawInput: string, withFloor: false) => {
  let cave = [["+"]];

  for (const line of rawInput.split("\n")) {
    const paths = line.split(" -> ");
    for (const idx in paths) {
      let [x2, y2] = paths[idx].split(",").map(Number);
      x2 -= 500;

      // TODO: rid
      // cave = growCave(cave, x2 + cave[0].indexOf("+"), y2 - cave.length + 1);

      const xGap = x2 + cave[0].indexOf("+");
      if (xGap < 0) {
        cave = cave.map((line) =>
          Array.from({ length: Math.abs(xGap) }, (_) => ".").concat(line),
        );
      } else if (xGap > cave[0].length - 1) {
        cave = cave.map((line) =>
          line.concat(
            Array.from(
              { length: Math.abs(cave[0].length - 1 - xGap) },
              (_) => ".",
            ),
          ),
        );
      }

      const yGap = y2 - cave.length + 1;
      if (yGap) {
        cave = cave.concat(
          Array.from({ length: yGap }, (_) =>
            Array.from({ length: cave[0].length }, (_) => "."),
          ),
        );
      }

      if (!Number(idx)) continue;

      let [x1, y1] = paths[idx - 1].split(",").map(Number);
      x1 -= 500;
      const xMod = x2 - x1;
      const yMod = y2 - y1;
      const xSign = Math.sign(xMod);
      const ySign = Math.sign(yMod);
      const coordinates = Array.from(
        { length: Math.abs(xMod || yMod) + 1 },
        (_, i) => [i * xSign + x1, i * ySign + y1],
      );
      for (const [x, y] of coordinates) {
        cave[y][x + cave[0].indexOf("+")] = "#";
      }
    }
  }

  if (withFloor) {
    cave.push(Array.from({ length: cave[0].length }, (_) => "."));
    cave.push(Array.from({ length: cave[0].length }, (_) => "#"));
  }

  return cave;
};

const countSand = (cave: Array<string>, withFloor: false) => {
  let source = [cave[0].indexOf("+"), 0];
  let current = structuredClone(source);
  let count = 0;
  while (true) {
    let [x, y] = structuredClone(current);
    let stopped = true;

    for (const [xMod, yMod] of [
      [0, 1], // down
      [-1, 1], // down-left
      [1, 1], // down-right
    ]) {
      let candidate = cave[y + yMod][x + xMod];
      if (candidate == undefined) {
        if (!withFloor) return count;

        for (const idx in cave) {
          const filler = idx == cave.length - 1 ? "#" : ".";
          cave[idx] = [filler].concat(cave[idx], [filler]);
        }

        source[0]++;
        current[0]++;
        stopped = false;
        break;
      }
      if (candidate == ".") {
        current[0] += xMod;
        current[1] += yMod;
        stopped = false;
        break;
      }
    }

    if (stopped) {
      cave[y][x] = "o";
      count++;
      if (withFloor && x == source[0] && y == source[1]) return count;
      current = structuredClone(source);
    }
  }
};

const part1 = (rawInput: string) => {
  return countSand(buildCave(rawInput));
};

const part2 = (rawInput: string) => {
  return countSand(buildCave(rawInput, true), true);
};

const testInput = `
498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 24,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 93,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
