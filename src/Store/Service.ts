import axios from "axios";
import { ApiConsts } from "../ApiConsts"

export default class Service {

    public async apiService(url: string, method: string, reqObj?: any) {
        let response;
        switch (method) {
            case ApiConsts._GET:
                response = await axios.get(url);
                return response;
            case ApiConsts._POST:
                response = await axios.post(url, reqObj);
                return response;
            case ApiConsts._PUT:
                response = await axios.put(url, reqObj);
                return response;
            case ApiConsts._DELETE:
                response = await axios.delete(url, reqObj);
                return response;
        }
    }
}