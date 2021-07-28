import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import router from "./router.js";

const PORT = 3000;
const DB_URL = `mongodb+srv://user:aeynjdsq53(@cluster0.o3rmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (err) {
    console.log(err);
  }
}

startApp();
