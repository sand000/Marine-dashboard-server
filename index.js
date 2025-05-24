const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

const authRoute = require("./routes/authRoutes");
const shipRoute = require("./routes/shipRoutes");
const dbConnect = require("./config/db");

dbConnect();
app.use(express.json());

app.use(cors());

app.use("/auth", authRoute);
app.use("/ship", shipRoute);

app.listen(PORT, () => {
  console.log(`Server is runnng on http://localhost:${PORT}`);
});
