import axios from "axios";
import { LOCAL_URL } from "./apiConfig";

export const apiClient = axios.create({
    baseURL: `${LOCAL_URL}`,
    withCredentials: true,
    headers: {
       "Access-Control-Allow-Origin": "*",
    },
 });