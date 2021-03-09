import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import api from "../services/api";

interface LoginContextData {
  avatar_url: string;
  login: string;
  name: string;
  handleLogin: (login: string) => void;
}

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps) {
  const router = useRouter();

  const [profile, setProfile] = useState({
    avatar_url: "",
    login: "",
    name: "",
  });

  const handleLogin = async (login: string) => {
    if (login.length > 0) {
      const response = await api.get(`/users/${login}`);
      if (response.status === 200) {
        setProfile({
          avatar_url: response.data.avatar_url,
          login: response.data.login,
          name: response.data.name,
        });
        router.push("/home");
      }
    }
  };

  return (
    <LoginContext.Provider
      value={{
        avatar_url: profile.avatar_url,
        login: profile.login,
        name: profile.name,
        handleLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
