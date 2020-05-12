import { featureModule1IState, ActionTypes, featureModule1_REQUEST, featureModule1_SUCCESS, featureModule1_FAILURE } from "./types";

// initail state for store
const initialState: featureModule1IState = {
    loading: false,
    loaded: false,
    error: false,
    success: false,
    featureModule1: [] //payload data
};
export function featureModule1Reducer(
    state = initialState,
    action: ActionTypes
): featureModule1IState {
    switch (action.type) {
        case featureModule1_REQUEST:
            return {
                // payload: [...state.payload, action.payload] -- use this for partial update of state
                loading: action.loading,
                loaded: action.loaded,
                error: action.error,
                success: action.success,
                featureModule1: []
            }
        case featureModule1_SUCCESS:
            return {
                loading: action.loading,
                loaded: action.loaded,
                error: action.error,
                success: action.success,
                featureModule1: action.featureModule1
            }
        case featureModule1_FAILURE:
            return {
                loading: action.loading,
                loaded: action.loaded,
                error: action.error,
                success: action.success,
                featureModule1: []
            }
        default:
            return state;
    }
}