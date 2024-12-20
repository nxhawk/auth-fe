import { ILoginUserReq, IRegisterUserReq } from "../types/user";
import AxiosClient from "./axios";

export const login = async (data: ILoginUserReq) => {
  const res = await AxiosClient.post("/user/login", data);
  return res.data;
};

export const register = async (data: IRegisterUserReq) => {
  const res = await AxiosClient.post("/user/register", data);
  return res.data;
};

export const profile = async () => {
  const res = await AxiosClient.get("/user/profile");
  return res.data;
};

export const logout = async () => {
  const res = await AxiosClient.post("/user/logout");
  return res.data;
};

export const refreshToken = async (refreshToken: string) => {
  const res = await AxiosClient.get("/user/refresh", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return res.data;
};
