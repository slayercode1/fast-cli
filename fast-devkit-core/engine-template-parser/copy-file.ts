import fs from 'fs';
import shell from 'shelljs';

const CURR_DIR = process.cwd();

export const createDirectoryContents = (templatePath: string, newProjectPath: string) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);
    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      console.log(`Création du dossier ${CURR_DIR}/${newProjectPath}/${file}`);
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });

  if (fs.existsSync(`${CURR_DIR}/${newProjectPath}/package.json`)) {
    console.log('Installation des dépendances...');
    shell.cd(`${CURR_DIR}/${newProjectPath}`);
    shell.exec('npm install');
  }
};
