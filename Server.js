import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import multer from "multer"
import path from "path"
import { File } from "./Model/Upload.js"

const app = express()
dotenv.config()

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "drxsgayj2",
  api_key: "638675799383433",
  api_secret: "Wmv5XHmLn7lBnvzOvTYCSBPZhBw",
});

app.use(express.urlencoded({ extended: true }))


mongoose
.connect(process.env.MONGODB,
    {
        dbName: "Nodejs_Course",
    }
)
.then(() => console.log("MongoDb Connected..!"))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.render("index.ejs",{url: null})
})

const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file.path

  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "File_Upload",
  });

  // save to database
  const db = await File.create({
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url
  })

  res.render("index.ejs", {url: cloudinaryRes.secure_url})

  // res.json({message: "File Uploaded Succesfully", cloudinaryRes})
})

const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`)
})