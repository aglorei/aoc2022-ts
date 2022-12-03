import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const getCommonItem = (...rucksacks: string[]) => {
  const rucksackSets = rucksacks.map((rucksack) => new Set(rucksack));
  return [
    ...rucksackSets.reduce((acc, rucksack) => {
      return new Set([...acc].filter((item) => rucksack.has(item)));
    }),
  ].join("");
};

const getItemPriority = (item: string) => {
  const modifier = item == item.toUpperCase() ? 38 : 96;
  return item.charCodeAt(0) - modifier;
};

const part1 = (rawInput: string) => {
  return parseInput(rawInput).reduce((acc, rucksack) => {
    const half = Math.ceil(rucksack.length / 2);
    const item = getCommonItem(rucksack.slice(0, half), rucksack.slice(half));
    return (acc += getItemPriority(item));
  }, 0);
};

const part2 = (rawInput: string) => {
  const rucksacks = parseInput(rawInput);
  let prioritySum = 0;
  for (let i = 0; i < rucksacks.length; i += 3) {
    const item = getCommonItem(
      rucksacks[i],
      rucksacks[i + 1],
      rucksacks[i + 2],
    );
    prioritySum += getItemPriority(item);
  }
  return prioritySum;
};

const testInput = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
