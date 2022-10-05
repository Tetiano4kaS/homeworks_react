import axios from "axios";
import {baseUrl} from "../configs";

const axiosServise = axios.create({baseURL:baseUrl});

export {axiosServise}