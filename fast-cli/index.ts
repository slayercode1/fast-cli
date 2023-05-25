#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from 'fs';
import { templateExpress, createDirectoryContents, createDirectoryContentsModels } from '@fast-devkit/core';
import {
  templateController,
  templateEntity,
  templateEnums,
  templateInterface,
  templateResource,
} from '@schematic/fast';
import { IOptionValue } from './interface';
const program = new Command();

program
  .name('fast cli')
  .version('0.1.0')
  .description('Un programme pour créer des fichiers')
  .option('--init <name>', 'Create a new project')
  .option('-r, --resource <name>', 'Create an resource')
  .option('-i, --interface <name>', 'Create an interface')
  .option('--enum <name>', 'Create an enum')
  .option('--controller <name>', 'Create an controller')
  .option('--entity <name>', 'Create an entity')
  .parse(process.argv);
const options: IOptionValue = program.opts();
const CURR_DIR = process.cwd();

if (options.init) {
  fs.mkdirSync(`${CURR_DIR}/${options.init}`);
  createDirectoryContents(templateExpress, options.init);
} else if (options.resource) {
  createDirectoryContentsModels(templateResource, options.resource, { title: options.resource });
} else if (options.interface) {
  createDirectoryContentsModels(templateInterface, options.interface, { title: options.interface });
} else if (options.enum) {
  createDirectoryContentsModels(templateEnums, options.enum, { title: options.enum });
} else if (options.controller) {
  createDirectoryContentsModels(templateController, options.controller, { title: options.controller });
} else if (options.entity) {
  createDirectoryContentsModels(templateEntity, options.entity, { title: options.entity });
} else {
  program.help();
}
