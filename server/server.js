require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// ✅ INIT APP FIRST
const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ ROUTES (AFTER app is created)
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

// ✅ CONNECT DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ SERVE FRONTEND
// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Catch-all (VERY IMPORTANT FIX)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));