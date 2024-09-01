export function head(pageTitle = '', cssFileList = []) {
    return `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${pageTitle ? pageTitle + ' | ' : ''}Atlyginimai</title>
            ${cssFileList.map(fileName => `<link rel="stylesheet" href="/css/${fileName}.css" />`).join('')}
        </head>`;
}