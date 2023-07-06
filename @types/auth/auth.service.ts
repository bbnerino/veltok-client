import { AXIOS_AUTH } from "../api/api.auth";
import { User } from "../user/user.entity";
import { LoginForm } from "./auth.login.form";
import { RegisterForm } from "./auth.register.form";

const AUTH_API = "/api/auth";

export const AuthService = {
  register: async (data: RegisterForm) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("nickname", data.nickname);
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }
    try {
      await AXIOS_AUTH.post(`${AUTH_API}/register`, formData);
    } catch (err) {
      return { error: err };
    }
  },

  login: async (data: LoginForm) => {
    try {
      const result = await AXIOS_AUTH.post("/api/auth/login", data);
      localStorage.setItem("token", result.data.token);
      return { data: result.data as User };
    } catch (err) {
      if (typeof err === "string") return { error: err as string };
      else return { error: "로그인에 실패했습니다." };
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};
