"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirectoryContents = void 0;
const fs_1 = __importDefault(require("fs"));
const CURR_DIR = process.cwd();
const createDirectoryContents = (templatePath, newProjectPath) => {
    const filesToCreate = fs_1.default.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`;
        const stats = fs_1.default.statSync(origFilePath);
        if (stats.isFile()) {
            let contents = fs_1.default.readFileSync(origFilePath, 'utf8');
            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
            fs_1.default.writeFileSync(writePath, contents, 'utf8');
        }
        else if (stats.isDirectory()) {
            console.log(`Création du dossier ${CURR_DIR}/${newProjectPath}/${file}`);
            fs_1.default.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
            (0, exports.createDirectoryContents)(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
        }
    });
};
exports.createDirectoryContents = createDirectoryContents;
