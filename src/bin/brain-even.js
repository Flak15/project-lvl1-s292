#!/usr/bin/env node

import { game, plName } from '..';


console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no"\n');

const name = plName();
const rounds = 3;

game(name, rounds);
