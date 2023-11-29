import express from 'express'
import helmet from 'helmet'
import mongoose from "mongoose"
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors';
import multer from "multer";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// import routers

import { userRouter } from './routes/users.js'
import { authRouter } from './routes/auth.js'
import { postsRouter } from './routes/posts.js'


const app = express();
const PORT = 8800;
dotenv.config()



mongoose.connect(process.env.MONGO_URL)

    .then(() => {
        console.log('Connected to mongodb');
    })

    .catch((err) => {
        throw err;
    });


app.use("/images", express.static(path.join(__dirname, "public/images")))

//middelware
app.use(cors()); // Enable CORS
app.use(express.json())
app.use(helmet())
app.use(morgan('common'));



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
  const upload = multer({storage: storage});
  
  app.post('/api/upload', upload.single('file'), (req, res) => {
    try {
      // Check if a file was uploaded successfully
      if (!req.file) {
        return res.status(400).json('No file uploaded');
      }
  
      // File uploaded successfully
      return res.status(200).json('File uploaded successfully');
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json('Error uploading the file');
    }
  });
  
  

app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)
app.use('/api/users', userRouter)


app.listen(PORT, () => {
    console.log(`server is running on port number ${PORT}`);

})