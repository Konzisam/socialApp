import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentsRoutes from "./routes/comments.js";
import postsRoutes from "./routes/posts.js";
import likesRoutes from "./routes/likes.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express()


// Enable CORS for all routes
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json())
app.use(cookieParser())
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/comments", commentsRoutes)
app.use("/api/posts", postsRoutes)
app.use("/api/likes", likesRoutes)

app.listen(8800, () => {
    console.log("Api is working");
})