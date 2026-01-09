const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// mount routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
