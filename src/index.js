import express from "express";
import connectDb from "./db/index.js";

const app = express();

connectDb();
app.listen(process.env.PORT, () => {
  console.log(`The App running on server ${process.env.PORT || 8000}`);
});

//first Approach

// (async () => {
//   try {
//     const instanceConnection = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     console.log(`The Mongodb connected ${instanceConnection.Connection}`);

//     app.on(error, () => {
//       console.log("connection failed", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on ${process.env.PORT}`);
//     });
//   } catch {
//     (err) => {
//       console.log(`MongoDB conncection failed ${err}`);
//     };
//   }
// })();
