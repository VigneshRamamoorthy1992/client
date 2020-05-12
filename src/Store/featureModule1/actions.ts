import { featureModule1_REQUEST, featureModule1_SUCCESS, featureModule1_FAILURE } from "./types";
import Service from "../Service";

const service = new Service();

export function featureModule1Request() {
    // updating store
    return {
        type: featureModule1_REQUEST,
        loading: true,
        loaded: false,
        error: false,
        success: false
    };
}

export function featureModule1Success(data: any) {
    // updating store on service call success
    return {
        type: featureModule1_SUCCESS,
        loading: false,
        loaded: true,
        error: false,
        success: true,
        featureModule1: data
    };
}

export function featureModule1Failure(error: any) {
    // updating store on service call failure
    return {
        type: featureModule1_FAILURE,
        loading: false,
        loaded: true,
        error: true,
        success: false
    };
}

// every store update should have an action
// every action will have 3 sub-action - request, success, failure 
// RS - react store (used to differentiate between local or state variable) - use your own convention if required
export function featureModule1RS(url: string, method: string, reqObj?: any) {

    return (dispatch: any) => {
        dispatch(featureModule1Request()); // calling request action
        service.apiService(url, method, reqObj)
            .then((response: any) => {
                dispatch(featureModule1Success(response)); // calling success action (service success)
            }).catch((error: any) => {
                dispatch(featureModule1Failure(error)); // calling failure action (service failure)
            })
    }
}