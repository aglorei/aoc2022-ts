<!-- Entries between SOLUTIONS and RESULTS tags are auto-generated -->

[![AoC](https://badgen.net/badge/AoC/2022/blue)](https://adventofcode.com/2022)
[![Node](https://badgen.net/badge/Node/v18.12.1+/blue)](https://nodejs.org/en/download/)
![Language](https://badgen.net/badge/Language/TypeScript/blue)
[![Template](https://badgen.net/badge/Template/aocrunner/blue)](https://github.com/caderek/aocrunner)

# 🎄 Advent of Code 2022 TypeScript 🎄

## Solutions

<!--SOLUTIONS-->

[![Day](https://badgen.net/badge/01/%E2%98%85%E2%98%85/green)](src/day01)
[![Day](https://badgen.net/badge/02/%E2%98%85%E2%98%85/green)](src/day02)
[![Day](https://badgen.net/badge/03/%E2%98%85%E2%98%85/green)](src/day03)
[![Day](https://badgen.net/badge/04/%E2%98%85%E2%98%85/green)](src/day04)
[![Day](https://badgen.net/badge/05/%E2%98%85%E2%98%85/green)](src/day05)
[![Day](https://badgen.net/badge/06/%E2%98%85%E2%98%85/green)](src/day06)
[![Day](https://badgen.net/badge/07/%E2%98%85%E2%98%85/green)](src/day07)
[![Day](https://badgen.net/badge/08/%E2%98%85%E2%98%85/green)](src/day08)
[![Day](https://badgen.net/badge/09/%E2%98%85%E2%98%85/green)](src/day09)
[![Day](https://badgen.net/badge/10/%E2%98%85%E2%98%85/green)](src/day10)
[![Day](https://badgen.net/badge/11/%E2%98%85%E2%98%85/green)](src/day11)
![Day](https://badgen.net/badge/12/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/13/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/14/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/15/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/16/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/17/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/18/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/19/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/20/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/21/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/22/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/23/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/24/%E2%98%86%E2%98%86/gray)
![Day](https://badgen.net/badge/25/%E2%98%86%E2%98%86/gray)

<!--/SOLUTIONS-->

_Click a badge to go to the specific day._

---

## Installation

All project dependencies are covered in the [Dockerfile](Dockerfile) definition in the repository root.

### Local

This assumes Docker as a runtime (feel free to use other runtimes). First ensure that Docker is [installed](https://docs.docker.com/get-docker/). From the repository root, build an image and tag appropriately (e.g., `aoc-ts:local`):

```sh
docker build --tag aoc-ts:local --file Dockerfile .
```

Once [logged in on Advent of Code](https://adventofcode.com/2022/auth/login), locate your session key; this shows up as the value for the `cookie` key in your request headers that you can pull out from browser network tab. Write this value to a `.env` file in the repository root under `AOC_SESSION_KEY` variable:

```sh
AOC_SESSION_KEY=<insert session key here>
```

From the repository root, instantiate a container with the current directory mounted and environment variables exported:

```sh
docker run --rm -it \
  --env-file .env \
  --volume $PWD:/aoc-ts/$(basename $PWD) \
  --workdir /aoc-ts/$(basename $PWD) \
  aoc-ts:local /bin/bash
```

### GitHub Codespaces

Once [logged in on Advent of Code](https://adventofcode.com/2022/auth/login), locate your session key; this shows up as the value for the `cookie` key in your request headers that you can pull out from browser network tab. Manage this value as an [encrypted secret for your codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) and name it `AOC_SESSION_KEY`.

Create a Codespace from your repository fork.

### Develop with aocrunner

After getting setup, whether it's locally or on GitHub Codespaces, execute the [`aocrunner` tool](https://github.com/caderek/aocrunner) for the day of the challenge. This will prompt you to install `esbuild` once for the duration of the container.

```sh
pnpm start <day>
```

Example:

```
pnpm start 1
```

---

## Results

<!--RESULTS-->

```
Day 01
Time part 1: 0.255ms
Time part 2: 0.295ms
Both parts: 0.550458ms
```

```
Day 02
Time part 1: 0.263ms
Time part 2: 0.267ms
Both parts: 0.530042ms
```

```
Day 03
Time part 1: 1.35ms
Time part 2: 0.957ms
Both parts: 2.3072090000000003ms
```

```
Day 04
Time part 1: 10.864ms
Time part 2: 10.213ms
Both parts: 21.076875ms
```

```
Day 05
Time part 1: 0.574ms
Time part 2: 1.142ms
Both parts: 1.716875ms
```

```
Day 06
Time part 1: 0.309ms
Time part 2: 2.67ms
Both parts: 2.9780830000000003ms
```

```
Day 07
Time part 1: 0.564ms
Time part 2: 0.5ms
Both parts: 1.0649579999999998ms
```

```
Day 08
Time part 1: 13.975ms
Time part 2: 28.276ms
Both parts: 42.250875ms
```

```
Day 09
Time part 1: 31.43ms
Time part 2: 18.643ms
Both parts: 50.072917000000004ms
```

```
Day 10
Time part 1: 0.107ms
Time part 2: 0.264ms
Both parts: 0.370917ms
```

```
Day 11
Time part 1: 5.429ms
Time part 2: 191.867ms
Both parts: 197.295625ms
```

```
Day 12
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 13
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 14
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 15
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 16
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 17
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 18
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 19
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 20
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 21
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 22
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 23
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 24
Time part 1: -
Time part 2: -
Both parts: -
```

```
Day 25
Time part 1: -
Time part 2: -
Both parts: -
```

```
Total stars: 22/50
Total time: 320.215ms
```

<!--/RESULTS-->

---

✨🎄🎁🎄🎅🎄🎁🎄✨
