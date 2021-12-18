import mongoose from "mongoose"
require('dotenv').config({ path: './.env' })

export async function connect() {
    try {
        await mongoose.connect(process.env.URI)
        console.log('>>> DB está conectada.')
    } catch (error) {
        console.log(error)
    }
}


