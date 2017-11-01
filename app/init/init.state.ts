export const initState: InitState = {
    isInitializingApp: true,
    isAppReady: false
}

export interface InitState {
    isInitializingApp: boolean;
    isAppReady: boolean;
}