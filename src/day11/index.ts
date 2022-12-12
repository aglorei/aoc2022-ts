import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const input = rawInput.split("\n");
  return input.reduce((acc, line, idx) => {
    if (!line.startsWith("Monkey")) return acc;

    const monkey = {
      items: input[idx + 1].slice(18).split(", ").map(Number),
      operation: (old: Number) => eval(input[idx + 2].slice(19)),
      divisor: Number(input[idx + 3].slice(21)),
      testTrue: Number(input[idx + 4][input[idx + 4].length - 1]),
      testFalse: Number(input[idx + 5][input[idx + 5].length - 1]),
      inspection: 0,
    };

    acc.push(monkey);
    return acc;
  }, []);
};

const getMonkeyBusiness = (
  rawInput: string,
  rounds: number,
  relief: number,
) => {
  const monkeys = parseInput(rawInput);
  const divisorsProduct = monkeys.reduce(
    (acc, monkey) => acc * monkey.divisor,
    1,
  );
  while (rounds--) {
    for (let monkey of monkeys) {
      while (monkey.items.length) {
        let item = monkey.items.shift();
        item = Math.floor(monkey.operation(item) / relief) % divisorsProduct;

        if (item % monkey.divisor == 0) {
          monkeys[monkey.testTrue].items.push(item);
        } else {
          monkeys[monkey.testFalse].items.push(item);
        }
        monkey.inspection++;
      }
    }
  }
  const inspections = monkeys
    .map((monkey) => monkey.inspection)
    .sort((first, second) => second - first);
  return inspections[0] * inspections[1];
};

const part1 = (rawInput: string) => {
  return getMonkeyBusiness(rawInput, 20, 3);
};

const part2 = (rawInput: string) => {
  return getMonkeyBusiness(rawInput, 10000, 1);
};

const testInput = `
Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1

`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 10605,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 2713310158,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
