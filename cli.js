#!/usr/bin/env node

'use strict';

const program = require('commander');
const tracker = require('./tracker');

program
  .command('track')
  .action(() => {
    tracker.track();
  })

program.parse(process.argv);
