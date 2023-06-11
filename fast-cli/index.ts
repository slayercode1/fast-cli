#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from 'fs';
import { templateExpress, createDirectoryContents, createDirectoryContentsModels } from '@ghost_/fast-devkit-core';
import {
  templateController,
  templateEntity,
  templateEnums,
  templateInterface,
  templateResource,
} from '@ghost_/schematic-fast';
import { IOptionValue } from './interface';
import {existsSync} from "fs";
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

const transformText= (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

if (options.init) {
  fs.mkdirSync(`${CURR_DIR}/${options.init}`);
  createDirectoryContents(templateExpress, options.init);
} else if (options.resource) {
  fs.mkdirSync(`${CURR_DIR}/${options.resource}`);
  createDirectoryContentsModels(templateResource, options.resource, { nameRoute: options.resource, titleClass: transformText(options.resource), titleEntity: options.resource, titleClassEntity: transformText(options.resource) });
} else if (options.interface) {

  if(existsSync(`${CURR_DIR}/${options.interface}`)) {
    createDirectoryContentsModels(templateInterface, options.interface, { title: transformText(options.interface) });
  }else {
    fs.mkdirSync(`${CURR_DIR}/${options.interface}`);
    createDirectoryContentsModels(templateInterface, options.interface, { title: transformText(options.interface) });
  }

} else if (options.enum){

  if(existsSync(`${CURR_DIR}/${options.enum}`)) {
    createDirectoryContentsModels(templateEnums, options.enum, { titleEnum: transformText(options.enum) });
  }else {
    fs.mkdirSync(`${CURR_DIR}/${options.enum}`);
    createDirectoryContentsModels(templateEnums, options.enum, { titleEnum: transformText(options.enum) });
  }
} else if (options.controller) {

  if(existsSync(`${CURR_DIR}/${options.controller}`)) {
    createDirectoryContentsModels(templateController, options.controller, { nameRoute: options.controller, titleClass: transformText(options.controller)});
  }else {
    fs.mkdirSync(`${CURR_DIR}/${options.controller}`);
    createDirectoryContentsModels(templateController, options.controller, { nameRoute: options.controller, titleClass: transformText(options.controller)});
  }

} else if (options.entity) {

  if (existsSync(`${CURR_DIR}/${options.entity}`)) {
    createDirectoryContentsModels(templateEntity, options.entity, { titleEntity: options.entity, titleClassEntity: transformText(options.entity) });
  }else {
    fs.mkdirSync(`${CURR_DIR}/${options.entity}`);
    createDirectoryContentsModels(templateEntity, options.entity, {
      titleEntity: options.entity,
      titleClassEntity: transformText(options.entity)
    });
  }

} else {
  program.help();
}
