export const projectState: ProjectsState = {
    isFetchingProjects: false,
    isAddingProject: false,
    projects: {}
};

export interface ProjectWrapper {
    [key: string]: Project;
}

export interface ProjectsState {
    isFetchingProjects: boolean;
    isAddingProject: boolean;
    projects: ProjectWrapper;
}

export interface Project {
    id: string;
    name: string;
    location: string;
}
