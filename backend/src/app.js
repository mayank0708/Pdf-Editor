import express from "express"
// import { User } from "./models/user.model.js"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit:"16kb" }))
// app.use("/api/v1/users", userRouter)


// app.post("/register", (req, res) => {
//     User.create(req.body)
//     .then( user => res.json(user))
//     .catch(err => res.json(err) )
// }) 

import userRouter from  './routes/user.routes.js'

app.use("/api/v1/users", userRouter);

export {app}