export const projectState: ProjectState = {
    isFetchingProjects: false,
    isAddingProject: false,
    projects: {}
};

export interface ProjectWrapper {
    [key: string]: Project;
}

export interface ProjectState {
    isFetchingProjects: boolean;
    isAddingProject: boolean;
    projects: ProjectWrapper;
}

export interface Project {
    id: string;
    name: string;
    location: string;
}
