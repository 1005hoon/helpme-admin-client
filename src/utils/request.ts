import axios, { AxiosResponse, Method } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
});

const request = <T>(
    method: Method,
    url: string,
    params?: any,
    data?: any
): Promise<AxiosResponse<T>> =>
    axiosInstance.request({
        method,
        url,
        params,
        data,
    });

export default request;
