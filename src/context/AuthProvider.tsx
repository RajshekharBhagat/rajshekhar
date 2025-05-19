'use client';
import {SessionProvider} from 'next-auth/react'

interface AuthProviderProps {
    children: React.ReactNode;
}

import React from 'react'

const AuthProvider = ({children}:AuthProviderProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider
