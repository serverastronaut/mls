import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/prisma";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                Email: {
                label: "Email",
                type: "email",
                placeholder: "user@something.com",
                },
                Clave: { label: "Clave", type: "password" },
            },
            async authorize(credentials, req) {
                const { Email, Clave } = credentials;
        
                const userFound = await prisma.usuarios.findUnique({
                  where: {
                    Email,
                  },
                });

                console.log(userFound)

                if (!userFound) throw new Error("Invalid credentials");
        
                // const validPassword = await bcrypt.compare(
                //   password,
                //   userFound.password
                // );
        
                // if (!validPassword) throw new Error("Invalid credentials");
        
                return {
                  Id: userFound.Id + "",
                  Nombre: userFound.Nombre,
                  Email: userFound.Email,
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
})

export { handler as GET, handler as POST }