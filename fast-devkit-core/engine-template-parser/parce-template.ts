import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { changeFileExtension, templateEngine } from './compiler-template';

const CURR_DIR = process.cwd();

export function createDirectoryContentsModels(
  templatePath: string,
  newProjectPath: string,
  setVariable: { [x: string]: string },
) {
  const filesToCreate = readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = join(templatePath, file);
    const stats = statSync(origFilePath);

    if (stats.isFile()) {
      const fileContent = readFileSync(origFilePath, 'utf8');
      const convertedContent = templateEngine(fileContent, setVariable);
      const writePath = join(CURR_DIR, newProjectPath, changeFileExtension(file, '.ts'));
      writeFileSync(writePath, convertedContent, 'utf8');
    } else if (stats.isDirectory()) {
      if (existsSync(`${CURR_DIR}/${newProjectPath}/${file}`)) {
        console.log(`Le dossier ${file} existe déjà.`);
        return;
      }
      mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
      createDirectoryContentsModels(`${templatePath}/${file}`, `${newProjectPath}/${file}`, setVariable);
    }
  });
}
