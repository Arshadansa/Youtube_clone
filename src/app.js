import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


///setting cross-origin----
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

//configuration------
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//importing router
import userRouter from "./routes/user.route.js";

//router declaration using middle ware

app.use("/api/v1/users", userRouter);

//example https:localhost:8000/api/v1/users/register/

export { app };
