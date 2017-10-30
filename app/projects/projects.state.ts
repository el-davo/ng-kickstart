export const projectState: ProjectState = {
    isFetchingProjects: false,
    isAddingProject: false,
    projects: []
};

export interface ProjectState {
    isFetchingProjects: boolean;
    isAddingProject: boolean;
    projects: Project[];
}

export interface Project {
    name: string;
    location: string;
}
