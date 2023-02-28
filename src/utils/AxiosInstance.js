import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.alquran.cloud/v1/",
  timeout: 5000,
});
export const instance1 = axios.create({
  baseURL: "https://islomapi.uz/",
  timeout: 5000,
});
