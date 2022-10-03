import { REACT_APP_API_URL } from "../config";
import axios from "axios";


export const apiInstance = axios.create({
    baseURL: `${REACT_APP_API_URL}`
});