
export interface featureModule1IState {
    loading: boolean,
    loaded: boolean,
    error: boolean,
    success: boolean,
    featureModule1: any;
}

export const featureModule1_REQUEST = "featureModule1_REQUEST";
export const featureModule1_SUCCESS = "featureModule1_SUCCESS";
export const featureModule1_FAILURE = "featureModule1_FAILURE";

interface Action {
    type: typeof featureModule1_REQUEST | typeof featureModule1_SUCCESS | typeof featureModule1_FAILURE
    loading: boolean,
    loaded: boolean,
    error: boolean,
    success: boolean,
    featureModule1: any;
}

export type ActionTypes = Action;

