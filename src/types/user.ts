export interface IFullUser {
  email: string;
  name: string;
}

export interface IRegisterUserReq {
  email: string;
  password: string;
  name: string;
}

export interface ILoginUserReq {
  email: string;
  password: string;
}

export interface ILoginUserRes extends IFullUser {
  accessToken: string;
  refreshToken: string;
}
