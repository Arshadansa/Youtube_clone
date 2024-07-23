import connectDB from "./db/index.js";
import  dotenv  from "dotenv";


dotenv.config({
  path: "./env",
});

connectDB();
// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();
