import run from "aocrunner";

const charactersProcessed = (rawInput: string, windowLength: number) => {
  // Alternate solution with slower benchmarks, but executes with linear
  // complexity, as opposed to polynomial complexity of the primary solution
  //
  // const characters = {};
  // for (let i = 0; i < rawInput.length; i++) {
  //   characters[rawInput[i]] ??= 0;
  //   characters[rawInput[i]] += 1;

  //   if (i >= windowLength) {
  //     characters[rawInput[i - windowLength]] -= 1;
  //     const uniqueCharacters = Object.fromEntries(
  //       Object.entries(characters).filter(([_, frequency]) => frequency == 1),
  //     );
  //     if (Object.keys(uniqueCharacters).length == windowLength) return i + 1;
  //   }
  // }
  for (let i = windowLength - 1; i < rawInput.length; i++) {
    const sequence = rawInput.slice(i - windowLength + 1, i + 1).split("");
    if (new Set(sequence).size == sequence.length) return i + 1;
  }
};

const part1 = (rawInput: string) => {
  return charactersProcessed(rawInput, 4);
};

const part2 = (rawInput: string) => {
  return charactersProcessed(rawInput, 14);
};

run({
  part1: {
    tests: [
      {
        input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
        expected: 7,
      },
      {
        input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
        expected: 5,
      },
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 6,
      },
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 10,
      },
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
        expected: 19,
      },
      {
        input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
        expected: 23,
      },
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 23,
      },
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 29,
      },
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 26,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
