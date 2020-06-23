#!/usr/bin/env node

'use strict';

const program = require('commander');
const path = require('path');

const camelz = require(path.join(__dirname, '..', 'package.json'));

const errors = require(path.join(__dirname, '..', 'lib', 'errors'));

program
  .version(camelz.version, '-v, --version')
  .description('Camelz Framework CLI')
  .command('stack [cmd]', 'Manage Camelz Stacks');
//  .command('parameters [cmd]', 'Manage Camelz Parameters')
//  .command('tags [cmd]', 'Manage Camelz Tags');

program.parse(process.argv);

if (!program.commands.map(cmd => cmd._name).includes(program.args[0])) {
  program.outputHelp();
  process.exit(errors.COMMAND_INVALID);
}
