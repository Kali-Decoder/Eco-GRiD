const express = require("express");
const dotenv = require("dotenv");
const cors= require("cors");
dotenv.config();
const app = express();
const port = 3000 || process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes"));
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});