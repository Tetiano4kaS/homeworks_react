import axios from "axios";
import {baseUrl} from "../configs/url";

const axiosInstance = axios.create({baseURL: baseUrl});

export {axiosInstance}