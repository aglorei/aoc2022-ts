FROM node:18.12.1

RUN npm install --global pnpm

WORKDIR /aoc-ts

COPY aoc-pnpm-workspace.yaml pnpm-workspace.yaml
COPY package.json pnpm-lock.yaml .
RUN pnpm install --prefer-frozen-lockfile
