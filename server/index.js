import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import router from './src/routes/productRoutes.js'
const app = express()
const port = 3400

app.use(express.json())
app.use(cors())
app.use('/', router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
mongoose.connect('mongodb+srv://Test:test123@cluster0.ghwwmer.mongodb.net/').catch(err => console.log("db not connected", err))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})