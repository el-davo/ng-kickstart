import {join} from 'path';
import {ensureDir} from 'fs-extra';
import {readFile, writeFile} from 'jsonfile';
import {Project} from './projects.state';

const homeDirectory = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
const homeDir = join(homeDirectory, '.ng-kickstart');
const projectsFilePath = join(homeDir, 'projects.json');

export function ensureSettingsDirectoryExists() {
    return new Promise((resolve, reject) => {
        ensureDir(homeDir, (err) => err ? reject(err) : resolve());
    });
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
