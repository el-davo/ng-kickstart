export const projectState: ProjectState = {
    isRunningLint: false,
    isLintSuccess: false
};

export interface ProjectState {
    isRunningLint: boolean;
    isLintSuccess: boolean;
}
