import {remote} from 'electron';
import {ensureDir} from 'fs-extra';
import {readFile, writeFile} from 'jsonfile';
import {homedir} from 'os';
import {join} from 'path';
import {Project} from './projects.state';

const homeDir = join(homedir(), '.ng-kickstart');
const projectsFilePath = join(homeDir, 'projects.json');

export function ensureSettingsDirectoryExists() {
    return ensureDir(homeDir);
}

export const fetchProjects = (): Promise<Project[]> => {
    return new Promise((resolve, reject) => {
        readFile(projectsFilePath, (err, projects: Project[]) => {
            err ? reject(err) : resolve(projects);
        });
    });
};

export const ensureIsAngularCliProject = (location): Promise<any> => {
    return new Promise((resolve, reject) => {
        readFile(join(location, '.angular-cli.json'), (err, cli: any) => {
            err ? reject(err) : resolve(cli);
        });
    });
};

export const getPackageJson = (location): Promise<any> => {
    return new Promise((resolve, reject) => {
        readFile(join(location, 'package.json'), (err, packageJson: any) => {
            err ? reject(err) : resolve(packageJson);
        });
    });
};

export function addProject(projects: Project[]) {
    return new Promise((resolve, reject) => {
        writeFile(projectsFilePath, projects, {spaces: 2}, (err) => {
            err ? reject(err) : resolve();
        });
    });
}

export function selectProjectDirectory() {
    return new Promise((resolve, reject) => {
        remote.dialog.showOpenDialog({properties: ['openDirectory']}, (filePath) => {
            !!filePath && filePath.length > 0 ? resolve(filePath[0]) : reject();
        });
    });
}
