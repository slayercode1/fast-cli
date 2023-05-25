#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs = __importStar(require("fs"));
const core_1 = require("@fast-devkit/core");
const fast_1 = require("@schematic/fast");
const program = new commander_1.Command();
program
    .name('fast cli')
    .version('0.1.0')
    .description('Un programme pour créer des fichiers')
    .option('-i, --init <name>', 'Create a new project')
    .option('-r, --resource <name>', 'Create an resource')
    .parse(process.argv);
const options = program.opts();
const CURR_DIR = process.cwd();
if (options.init) {
    fs.mkdirSync(`${CURR_DIR}/${options.init}`);
    (0, core_1.createDirectoryContents)(core_1.templateExpress, options.init);
}
else if (options.resource) {
    fs.mkdirSync(`${CURR_DIR}/${options.resource}`);
    (0, core_1.createDirectoryContentsModels)(fast_1.templateResource, options.resource, { name: options.resource });
}
else {
    console.log('Aucune option choisie');
}
