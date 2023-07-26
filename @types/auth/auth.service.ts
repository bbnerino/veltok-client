import { useRouter } from "next/router";
import { AXIOS_AUTH } from "../common/api/api.auth";
import { User } from "../user/user.entity";
import { LoginForm } from "./auth.login.form";
import { RegisterForm } from "./auth.register.form";
import { LocalStorage } from "../common/storage/localstorage";

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

    const response: User = await AXIOS_AUTH.post(
      `${AUTH_API}/register`,
      formData
    );
    return response;
  },

  login: async (data: LoginForm) => {
    await AXIOS_AUTH.post(`${AUTH_API}/login`, data)
      .then((res) => {
        if (res.status === 200) {
          LocalStorage.setItem("token", res.data.token);
          return (window.location.href = "/");
        }
        return alert("로그인에 실패하였습니다.");
      })
      .catch((err) => {
        return alert(err.response.data);
      });
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};
