import {Linter, Configuration} from 'tslint';
import {Project} from '../../projects/projects.state';
import {readFile} from 'fs';
import {join} from 'path';

export function getTslintFile(project: Project) {
    return new Promise((resolve, reject) => {
        readFile(join(project.location, '.tslintrc'), 'utf8', (err, file) => {
            err ? reject(err) : resolve(file);
        });
    });
}

export function startLint(project: Project, tslintConfig: any) {
    return new Promise((resolve, reject) => {
        //const linter = new Linter(tslintConfig);
        //const configuration = Configuration.findConfiguration(tslintConfig, null).results;

        //linter.lint(null, null, configuration);

        //resolve(linter.getResult());
    });
}