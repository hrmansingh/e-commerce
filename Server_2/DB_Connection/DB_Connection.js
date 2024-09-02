import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export async function DB_Connection(){
    try {
    await mongoose.connect(process.env.DB_URL_CONNECTION)
        console.log('Database Connected')
    } catch (error) {
        console.log(`Not connected ${error}`)
    }
}


