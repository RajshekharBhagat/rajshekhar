"use client";
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
  children: React.ReactNode;
}

import React from "react";
import QueryProvider from "./QueryProvider";

const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <SessionProvider>
      <QueryProvider>{children}</QueryProvider>
    </SessionProvider>
  );
};

export default AuthProvider;
