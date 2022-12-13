import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput.split("\n\n").map((pair) => pair.split("\n").map(eval));

const comparePackets = (left: number | number[], right: number | number[]) => {
  if (Number.isInteger(left) && Number.isInteger(right)) return left - right;
  if (Number.isInteger(left)) left = [left];
  if (Number.isInteger(right)) right = [right];

  for (const idx in left) {
    if (idx > right.length - 1) return 1;

    const result = comparePackets(left[idx], right[idx]);
    if (result != 0) return result;
  }

  return left.length == right.length ? 0 : -1;
};

const part1 = (rawInput: string) => {
  const packetPairs = parseInput(rawInput);
  return packetPairs.reduce((acc, pair, idx) => {
    if (comparePackets(pair[0], pair[1]) < 0) acc += idx + 1;
    return acc;
  }, 0);
};

const part2 = (rawInput: string) => {
  const packets = parseInput(rawInput).flat();
  const divider1 = [[2]];
  const divider2 = [[6]];
  packets.push(divider1, divider2);
  packets.sort(comparePackets);
  return (packets.indexOf(divider1) + 1) * (packets.indexOf(divider2) + 1);
};

const testInput = `
[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 13,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 140,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
