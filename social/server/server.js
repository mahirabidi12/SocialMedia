import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'

dotenv.config()
import app from './app.js'


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

connectDb()