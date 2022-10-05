import {axiosServise} from "./axios.servise";

import {baseUrl, url} from "../configs";

const userService = {
    getAll: ()=> axiosServise.get(url.users),
    findById:(id)=> axiosServise.get(`${url.users}/${id}`)
}
export {
    userService
}