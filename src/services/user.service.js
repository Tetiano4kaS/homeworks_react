import {axiosInstance} from "./axios.service";

import {baseUrl, url} from "../configs/url";

const userService ={
    getAll: () => axiosInstance.get(url.users)
}

export {
    userService
}