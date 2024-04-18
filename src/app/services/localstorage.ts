import { IProductApi } from "../../Interfaces";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data !== null) return JSON.parse(data);

  return {};
};

export const setLocalStorage = (key: string, data: IProductApi) => {
  localStorage.setItem(key, JSON.stringify(data));
};
