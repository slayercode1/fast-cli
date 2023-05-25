"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeFileExtension = exports.templateEngine = void 0;
function templateEngine(template, data) {
    const parsedTemplate = parse(template);
    let output = '';
    for (const item of parsedTemplate) {
        if (item.startsWith('{{') && item.endsWith('}}')) {
            const variableName = item.slice(2, -2).trim();
            if (data.hasOwnProperty(variableName)) {
                output += data[variableName];
            }
            else {
                output += item;
            }
        }
        else {
            output += item;
        }
    }
    return output;
}
exports.templateEngine = templateEngine;
const parse = (template) => {
    let result = /{{(.*?)}}/g.exec(template);
    const arr = [];
    let firstPos;
    while (result) {
        firstPos = result.index;
        if (firstPos !== 0) {
            arr.push(template.substring(0, firstPos));
            template = template.slice(firstPos);
        }
        arr.push(result[0]);
        template = template.slice(result[0].length);
        result = /{{(.*?)}}/g.exec(template);
    }
    if (template)
        arr.push(template);
    return arr;
};
function changeFileExtension(file, newExtension) {
    const index = file.lastIndexOf('.');
    if (index !== -1) {
        const fileName = file.slice(0, index);
        return `${fileName}${newExtension}`;
    }
    return file;
}
exports.changeFileExtension = changeFileExtension;
