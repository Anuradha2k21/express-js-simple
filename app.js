const express = require("express");
const cors = require("cors");
const UserModel = require("./userModel");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow all origins (not recommended for production)
app.use(express.json());

// Allow specific origins
// app.use(cors({
//     origin: 'https://your-trusted-website.com'
// }));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Routes
app.get("/api/users", async (req, res, next) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get("/api/users/:id", async (req, res, next) => {
  try {
    const user = await UserModel.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post("/api/users", async (req, res, next) => {
  try {
    const userId = await UserModel.createUser(req.body);
    res.status(201).json({ id: userId, ...req.body });
  } catch (error) {
    next(error);
  }
});

app.put("/api/users/:id", async (req, res, next) => {
  try {
    const success = await UserModel.updateUser(req.params.id, req.body);
    if (!success) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ id: req.params.id, ...req.body });
  } catch (error) {
    next(error);
  }
});

app.delete("/api/users/:id", async (req, res, next) => {
  try {
    const success = await UserModel.deleteUser(req.params.id);
    if (!success) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
