import axios from "axios";

export const request = axios.create({
    baseURL: `http://localhost:${process.env.PORT}`
});
