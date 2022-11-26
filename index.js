import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(5050, () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log("Connected to DB"))
        .catch(err => console.log(err))
})
