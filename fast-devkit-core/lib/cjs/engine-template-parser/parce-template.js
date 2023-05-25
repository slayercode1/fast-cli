"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirectoryContentsModels = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const compiler_template_1 = require("./compiler-template");
const CURR_DIR = process.cwd();
function createDirectoryContentsModels(templatePath, newProjectPath, setVariable) {
    const filesToCreate = (0, fs_1.readdirSync)(templatePath);
    filesToCreate.forEach(file => {
        const origFilePath = (0, path_1.join)(templatePath, file);
        const stats = (0, fs_1.statSync)(origFilePath);
        if (stats.isFile()) {
            const fileContent = (0, fs_1.readFileSync)(origFilePath, 'utf8');
            const convertedContent = (0, compiler_template_1.templateEngine)(fileContent, setVariable);
            const writePath = (0, path_1.join)(CURR_DIR, newProjectPath, (0, compiler_template_1.changeFileExtension)(file, '.ts'));
            (0, fs_1.writeFileSync)(writePath, convertedContent, 'utf8');
        }
        else if (stats.isDirectory()) {
            if ((0, fs_1.existsSync)(`${CURR_DIR}/${newProjectPath}/${file}`)) {
                console.log(`Le dossier ${file} existe déjà.`);
                return;
            }
            (0, fs_1.mkdirSync)(`${CURR_DIR}/${newProjectPath}/${file}`);
            createDirectoryContentsModels(`${templatePath}/${file}`, `${newProjectPath}/${file}`, setVariable);
        }
    });
}
exports.createDirectoryContentsModels = createDirectoryContentsModels;
