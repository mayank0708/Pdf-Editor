import dotenv from  'dotenv';
import connectDB from './db/connectDb.js';
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on( "error", (error) => {
        console.log("ERROR", error)
    })

    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection Failed !!! ", error)
})