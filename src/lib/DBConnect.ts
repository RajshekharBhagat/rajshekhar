import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};


async function DBConnect() {
    if(connection.isConnected) {
        console.log('Already Connected to Database');
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to Database')
    } catch (error: any) {
        console.log('Database connection failed: ',error);
        throw new Error(error.message);
    }
}

export default DBConnect;