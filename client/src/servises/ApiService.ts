import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

import JwtService from './JwtService';

export default class ApiServices {
  private static axios: AxiosInstance | null;

  public static init(): void {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        Authorization: `Bearer ${JwtService.getToken()}`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public static get(
    endPoint: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.get(endPoint, config);
  }

  public static post(
    endPoint: string,
    body: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.post(endPoint, body, config);
  }

  public static put(
    endPoint: string,
    body: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.put(endPoint, body, config);
  }

  public static destroy(
    endPoint: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.delete(endPoint, config);
  }
}
