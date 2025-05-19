import { User } from "next-auth";
type userID = string;
declare module 'next-auth/jwt' {
    interface JWT {
        id: userID,
        name: string,
        email: string,
        picture: string,
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: userID,
            name: string,
            email: string,
            image: string,
        }
    }
}