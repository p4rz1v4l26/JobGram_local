import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JobGram",
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(`Error occured while connecting to DB: ${err}`);
    });
};
