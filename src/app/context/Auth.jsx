'use client'
import React from 'react';
import { SessionProvider } from "next-auth/react"

const Auth = ({ children }) => {
    return (
        <div>
            <SessionProvider>
                { children }
            </SessionProvider>
        </div>
    );
}

export default Auth;
