import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.BASE_UEL,
});
const BASE_UEL = process.env.BASEE_UEL;

export { Axios, BASE_UEL };
