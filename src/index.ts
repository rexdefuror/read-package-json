import fs from 'fs';
import util from 'util';
import { join } from 'path';
import { getInput, exportVariable, setFailed } from '@actions/core';

const main = async () => {
    try {
        const path = getInput('path');
        const fileName = getInput('file');

        const file = await fs.promises.readFile(join(path, fileName), 'utf8');

        if (!file) {
            setFailed('Could not read file');
            return;
        }
        const packageFile = JSON.parse(file);
        if (!packageFile) {
            setFailed('Could not parse package.json');
            return;
        }

        const justFileName = fileName.split('.')[0];

        exportVariable(`${justFileName.toUpperCase()}_NAME`, packageFile.name);
        exportVariable(`${justFileName.toUpperCase()}_VERSION`, packageFile.version);
        exportVariable(`${justFileName.toUpperCase()}_DESCRIPTION`, packageFile.description);
    }
    catch (error: any) {
        setFailed(error.message);
    }
}

main();

