import {axiosInstance} from "./axios.service";
import {url} from "../config";


const carService = {
    getAll:()=>axiosInstance.get(url.cars),
    create:(car)=>axiosInstance.post(url.cars,car),
    getById:(id)=>axiosInstance.get(`${url.cars}/${id}`),
    updateById:(id,car)=>axiosInstance.put(`${url.cars}/${id}`,car),
    deleteById:(id)=>axiosInstance.delete(`${url.cars}/${id}`)
};

export {carService}