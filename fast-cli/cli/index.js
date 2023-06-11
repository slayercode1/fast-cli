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
const fast_devkit_core_1 = require("@ghost_/fast-devkit-core");
const schematic_fast_1 = require("@ghost_/schematic-fast");
const fs_1 = require("fs");
const program = new commander_1.Command();
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
const options = program.opts();
const CURR_DIR = process.cwd();
const transformText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
if (options.init) {
    fs.mkdirSync(`${CURR_DIR}/${options.init}`);
    (0, fast_devkit_core_1.createDirectoryContents)(fast_devkit_core_1.templateExpress, options.init);
}
else if (options.resource) {
    fs.mkdirSync(`${CURR_DIR}/${options.resource}`);
    (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateResource, options.resource, { nameRoute: options.resource, titleClass: transformText(options.resource), titleEntity: options.resource, titleClassEntity: transformText(options.resource) });
}
else if (options.interface) {
    if ((0, fs_1.existsSync)(`${CURR_DIR}/${options.interface}`)) {
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateInterface, options.interface, { title: transformText(options.interface) });
    }
    else {
        fs.mkdirSync(`${CURR_DIR}/${options.interface}`);
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateInterface, options.interface, { title: transformText(options.interface) });
    }
}
else if (options.enum) {
    if ((0, fs_1.existsSync)(`${CURR_DIR}/${options.enum}`)) {
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateEnums, options.enum, { titleEnum: transformText(options.enum) });
    }
    else {
        fs.mkdirSync(`${CURR_DIR}/${options.enum}`);
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateEnums, options.enum, { titleEnum: transformText(options.enum) });
    }
}
else if (options.controller) {
    if ((0, fs_1.existsSync)(`${CURR_DIR}/${options.controller}`)) {
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateController, options.controller, { nameRoute: options.controller, titleClass: transformText(options.controller) });
    }
    else {
        fs.mkdirSync(`${CURR_DIR}/${options.controller}`);
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateController, options.controller, { nameRoute: options.controller, titleClass: transformText(options.controller) });
    }
}
else if (options.entity) {
    if ((0, fs_1.existsSync)(`${CURR_DIR}/${options.entity}`)) {
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateEntity, options.entity, { titleEntity: options.entity, titleClassEntity: transformText(options.entity) });
    }
    else {
        fs.mkdirSync(`${CURR_DIR}/${options.entity}`);
        (0, fast_devkit_core_1.createDirectoryContentsModels)(schematic_fast_1.templateEntity, options.entity, {
            titleEntity: options.entity,
            titleClassEntity: transformText(options.entity)
        });
    }
}
else {
    program.help();
}
