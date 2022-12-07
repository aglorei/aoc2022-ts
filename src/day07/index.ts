import run from "aocrunner";

interface DirectoryDictionary {
  [index: string]: Directory;
}

interface Directory {
  size: number;
  parent: Directory;
  path: string;
}

const parseInput = (rawInput: string) => {
  let directories: DirectoryDictionary = {
    "/": { size: 0, parent: null, path: "/" },
  };
  let pwd = directories["/"];
  rawInput.split("\n").forEach((line, idx, lines) => {
    if (line.startsWith("$ cd")) {
      let directory = line.slice(5);
      if (directory == "/") return;
      pwd =
        directory == ".." ? pwd.parent : directories[`${pwd.path}${directory}`];
    } else if (line.startsWith("$ ls")) {
      for (let i = idx + 1; i < lines.length; i++) {
        if (lines[i].startsWith("$")) break;
        if (lines[i].startsWith("dir")) {
          let directory = lines[i].slice(4);
          directories[`${pwd.path}${directory}`] ??= {
            size: 0,
            parent: pwd,
            path: `${pwd.path}${directory}`,
          };
        } else {
          let parent = pwd.parent;
          let size = Number(lines[i].split(" ")[0]);
          pwd.size += size;
          while (parent) {
            parent.size += size;
            parent = parent.parent;
          }
        }
      }
    }
  });
  return directories;
};

const part1 = (rawInput: string) => {
  const directories = parseInput(rawInput);
  return Object.values(directories)
    .filter((directory) => directory.size <= 100000)
    .reduce((acc, directory) => (acc += directory.size), 0);
};

const part2 = (rawInput: string) => {
  const directories = parseInput(rawInput);
  const directorySizes = Object.values(directories)
    .map((directory) => directory.size)
    .sort((first, second) => first - second);
  const freeSpace = 70000000 - directories["/"].size;
  const neededSpace = 30000000 - freeSpace;
  for (let i = 0; i < directorySizes.length; i++) {
    if (directorySizes[i] > neededSpace) return directorySizes[i];
  }
};

const testInput = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 95437,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 24933642,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
