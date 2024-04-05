import mydb from "./db.js"
import express from 'express'
const app = express()
import authRouter from './routes/auth.js'; 
import noteRouter from './routes/notes.js'; 
import bodyParser from "body-parser";
import cors from "cors";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

mydb();
const port = 5000

// Available Routes

app.use("/api/auth", authRouter)
app.use("/api/notes", noteRouter)

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})