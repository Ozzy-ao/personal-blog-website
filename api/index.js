import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js"
import userRouter from "./routes/users.js"
import postRouter from "./routes/posts.js"
import multer from "multer";

const app = express()

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

app.use(cookieParser())
app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, '../client/public/upload')
    },
    filename: function (req, file, cd) {
        cd(null, Date.now() + file.originalname)
    }
})

const upload = multer(storage)

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file
    res.status(200).json(file.filename)
})

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)

app.listen(8000, () => {
    console.log("8000端口已启动");
})