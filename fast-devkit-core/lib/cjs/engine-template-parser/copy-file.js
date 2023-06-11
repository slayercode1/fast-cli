"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirectoryContents = void 0;
const fs_1 = __importDefault(require("fs"));
const shelljs_1 = __importDefault(require("shelljs"));
const CURR_DIR = process.cwd();
const createDirectoryContents = (templatePath, newProjectPath) => {
    const filesToCreate = fs_1.default.readdirSync(templatePath);
    filesToCreate.forEach((file) => {
        const origFilePath = `${templatePath}/${file}`;
        const stats = fs_1.default.statSync(origFilePath);
        if (stats.isFile()) {
            const contents = fs_1.default.readFileSync(origFilePath, 'utf8');
            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
            fs_1.default.writeFileSync(writePath, contents, 'utf8');
        }
        else if (stats.isDirectory()) {
            console.log(`Création du dossier ${CURR_DIR}/${newProjectPath}/${file}`);
            fs_1.default.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
            (0, exports.createDirectoryContents)(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
        }
    });
    if (fs_1.default.existsSync(`${CURR_DIR}/${newProjectPath}/package.json`)) {
        console.log('Installation des dépendances...');
        shelljs_1.default.cd(`${CURR_DIR}/${newProjectPath}`);
        shelljs_1.default.exec('npm install');
    }
};
exports.createDirectoryContents = createDirectoryContents;
