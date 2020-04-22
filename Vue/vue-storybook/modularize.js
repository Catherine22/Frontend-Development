const Path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const ora = require('ora');
const { exec } = require('child_process');
const journal = require('./journal.json');
const ERR = '[IG ERROR]';

function showError(message) {
    console.log('\n', message, '\n');
    process.exit(1);
}

function deleteFolderRecursively(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(file => {
            const curPath = Path.join(path, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursively(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function camelCaseToDashes(str) {
    let newStr = '';
    let header = 0;
    while (header < str.length) {
        let c = str.charAt(header);
        if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
            newStr += '-';
            newStr += c.toLowerCase();
        } else {
            newStr += c;
        }
        header++;
    }
    return newStr;
}

// If there is no extra argument, the length of process.argv will be 2
if (process.argv.length <= 2) {
    showError(chalk.red(ERR, `npm run publish ${chalk.red.underline.bold('component name')}`));
}

const root = process.cwd();
const componentName = process.argv[process.argv.length - 1];
const WORK_DIR = `${root}/src/components/${componentName}`;
const DIST = 'dist';
const TEMP_DIR = './dist/temp';
const REGISTRY = 'https://xxx.xxx.xxx';
const DEFAULT_VERSION = '1.0.0';

if (!fs.existsSync(WORK_DIR)) {
    showError(
        chalk.red(
            ERR,
            `Directory does not exist. Please navigate to /src/components/YOUR_COMPONENT_DIR/ and try again`
        )
    );
}

if (!fs.existsSync(`${WORK_DIR}/index.vue`)) {
    showError(
        chalk.red(
            ERR,
            `index.vue does not exist. Please navigate to /src/components/YOUR_COMPONENT_DIR/ and try again`
        )
    );
}

deleteFolderRecursively(DIST);

const spinner = ora('Configuring dependencies...');
spinner.start();

exec(
    `npx vue-cli-service build --target lib --name ${componentName} ./src/components/${componentName}/index.vue`,
    error => {
        error && showError(chalk.red(ERR, error));

        fs.mkdirSync(TEMP_DIR, {}, error => showError(chalk.red(ERR, error)));
        fs.rename(
            `./dist/${componentName}.common.js`,
            `${TEMP_DIR}/${componentName}.common.js`,
            error => error && showError(chalk.red(ERR, error))
        );
        fs.rename(
            `./dist/${componentName}.css`,
            `${TEMP_DIR}/${componentName}.css`,
            error => error && showError(chalk.red(ERR, error))
        );
        const standardConf = {
            name: `@cath/${camelCaseToDashes(componentName)}`,
            version: journal[componentName] || DEFAULT_VERSION,
            description: 'My shared component',
            author: 'catherine',
            private: false,
            license: 'MIT',
            main: `${componentName}.common.js`
        };
        fs.writeFileSync(
            `${TEMP_DIR}/package.json`,
            JSON.stringify(standardConf),
            error => error && showError(chalk.red(ERR, error))
        );
        const publishCmd =
            standardConf.version === DEFAULT_VERSION
                ? `npm publish --registry ${REGISTRY}`
                : `npm version patch --no-git-tag-version && npm publish --registry ${REGISTRY}`;
        exec(publishCmd, { cwd: `${root}/dist/temp` }, error => {
            error && showError(chalk.red(ERR, error));
            const packageFile = fs.readFileSync(`${root}/dist/temp/package.json`);
            const conf = JSON.parse(packageFile);
            journal[componentName] = conf.version;
            fs.writeFileSync(
                `journal.json`,
                JSON.stringify(journal),
                error => error && showError(chalk.red(ERR, error))
            );
            deleteFolderRecursively(`${root}/dist`);
            spinner.succeed();
        });
    }
);
