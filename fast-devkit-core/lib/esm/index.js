import * as path from 'path';
const templateExpress = path.join(__dirname, 'app-template');
import { createDirectoryContents } from './engine-template-parser/copy-file';
import { createDirectoryContentsModels } from './engine-template-parser/parce-template';
export { templateExpress, createDirectoryContents, createDirectoryContentsModels };
