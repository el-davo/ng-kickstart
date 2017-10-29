export const projectState: ProjectState = {
    isFetchingProjects: false,
    isAddingProject: false,
    showAddProjectModal: false,
    projects: [],
    addProjectForm: {
        name: '',
        location: ''
    }
};

export interface ProjectState {
    isFetchingProjects: boolean;
    isAddingProject: boolean;
    showAddProjectModal: boolean;
    projects: Project[];
    addProjectForm: Project;
}

export interface Project {
    name: string;
    location: string;
}
