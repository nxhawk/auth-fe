import { ILoginUserReq, IRegisterUserReq } from "../types/user";
import AxiosClient from "./axios";

export const login = async (data: ILoginUserReq) => {
  const res = await AxiosClient.post("/auth/login", data);
  return res.data;
};

export const register = async (data: IRegisterUserReq) => {
  const res = await AxiosClient.post("/auth/register", data);
  return res.data;
};

export const refreshToken = async (refreshToken: string) => {
  const res = await AxiosClient.get("/auth/refresh", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return res.data;
};