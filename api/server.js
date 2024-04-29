import express from "express"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

const app = express();

dotenv.config()



app.use(express.json())
app.use(cookieParser());

app.get("/", (req, res) => {
return res.send({message : "hello from API"})
})


app.listen(process.env.PORT || 5080, () => {
  console.log("Server listening on " + 5080)
})