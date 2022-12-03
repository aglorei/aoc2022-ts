import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const getItemPriority = (item: string) => {
  const modifier = item == item.toUpperCase() ? 38 : 96;
  return item.charCodeAt(0) - modifier;
};

const part1 = (rawInput: string) => {
  return parseInput(rawInput).reduce((acc, rucksack) => {
    const half = Math.ceil(rucksack.length / 2);
    const compartment1 = new Set(rucksack.slice(0, half));
    const compartment2 = new Set(rucksack.slice(half));
    const item = [...compartment1]
      .filter((item) => compartment2.has(item))
      .join("");
    return (acc += getItemPriority(item));
  }, 0);
};

const part2 = (rawInput: string) => {
  const rucksacks = parseInput(rawInput);
  let prioritySum = 0;
  for (let i = 0; i < rucksacks.length; i += 3) {
    const elf1 = new Set(rucksacks[i]);
    const elf2 = new Set(rucksacks[i + 1]);
    const elf3 = new Set(rucksacks[i + 2]);
    const item = [
      ...[elf1, elf2, elf3].reduce((acc, elf) => {
        return new Set([...acc].filter((item) => elf.has(item)));
      }),
    ].join("");
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
