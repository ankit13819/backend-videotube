import express from "express";
import connectDb from "./db/index.js";

const app = express();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`The App running on server ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection Failed !!!! ", error);
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
