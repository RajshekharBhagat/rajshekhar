import {NextAuthOptions} from 'next-auth';
import {MongoDBAdapter} from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongoDB_Client';
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

function getGoogleCredentials() {
    const clientID = process.env.GOOGLE_CLIENT_ID;
    const clientSecrete = process.env.GOOGLE_CLIENT_SECRET;
    if(!clientID || clientID.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_ID');
    }
    if(!clientSecrete || clientSecrete.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_SECRETE');
    }

    return {clientID,clientSecrete}
}

function getGitHubCredentials() {
    const clientID = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    if(!clientID || clientID.length === 0) {
        throw new Error('Missing GITHUB_CLIENT_ID');
    }
    if(!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_SECRET');
    }
    return {clientID,clientSecret}
}

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientID,
            clientSecret: getGoogleCredentials().clientSecrete,
        }),
        GitHubProvider({
            clientId: getGitHubCredentials().clientID,
            clientSecret: getGitHubCredentials().clientSecret
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token,user}) {
            if(user && user.name && user.email && user.image) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.picture = user.image;
            }
            return token;
        },
        async session({token,session}) {
            if(token) {
                session.user.id = token.id,
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }
            return session;
        }
    },
    secret: process.env.AUTH_SECRET
}