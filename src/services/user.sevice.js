import {axiosInstance} from "./axios.service";
import {baseUrl,url} from "../configs";

const userService = {

    getAll:() => axiosInstance.get(baseUrl+url.v3+url.launches)
}
export {
    userService
}