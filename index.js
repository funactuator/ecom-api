const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user')

dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Db connected successfully!");
}).catch((err) => {
    console.log(err);
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Service is Up and running");
})

// app.get("/api/user", () => {
//     console.log("api hit success");
// })
app.use(express.json());
app.use('/api/users', userRoute);

