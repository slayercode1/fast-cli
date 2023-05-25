import fs from 'fs';
const CURR_DIR = process.cwd();
export const createDirectoryContents = (templatePath, newProjectPath) => {
    const filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`;
        const stats = fs.statSync(origFilePath);
        if (stats.isFile()) {
            let contents = fs.readFileSync(origFilePath, 'utf8');
            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
            fs.writeFileSync(writePath, contents, 'utf8');
        }
        else if (stats.isDirectory()) {
            console.log(`Création du dossier ${CURR_DIR}/${newProjectPath}/${file}`);
            fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
            createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
        }
    });
};
