import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email',  type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = { email: 'ryazanov.andrej@gmail.com', password: 111 }

                if(credentials.email == user.email) {
                    return user
                }

                return null
            }
        })
    ], pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST }