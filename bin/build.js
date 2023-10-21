
import React from 'react';
import ReactDOM from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import process, { exit } from 'process';

const argv = process.argv.slice(2);

const templatePath = argv[0];
const serverPagesPath = argv[1];
const outPath = argv[2];

if(!templatePath || !serverPagesPath || !outPath) {
    console.error("You need to provide a template HTML file, the compiled entry-server file path and a output dir as parameters.");
    exit(1);
}

const ServerPages = await import(path.join(process.cwd(), serverPagesPath));

const template = fs.readFileSync(path.join(process.cwd(), templatePath)).toString();

const generations = Object.keys(ServerPages).map((page) => {
    const html = template.replace(/<!--SSR(.*)-->/, ReactDOM.renderToString(React.createElement(ServerPages[page])));
    return new Promise((resolve, reject) => fs.writeFile(path.join(process.cwd(), outPath, `${page}.html`), html, (err) => err ? reject(err) : resolve()));
});

try {
    await Promise.all(generations);
    console.log(`${generations.length} pages generated.`);
} catch (err) {
    console.error(err);
    exit(1);
}