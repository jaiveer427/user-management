const express = require("express");
const cors = require("cors");
const users = require("./users");
const db = require('./db');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/seed', async (req, res) => {
  try {
    const values = users.map(u => [u.name, u.email, u.role]);
    const sql = 'INSERT INTO users (name, email, role) VALUES ?';
    await db.query(sql, [values]);
    res.status(201).send({ message: "100 users seeded successfully!" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get("/users", async (req, res) => {
  const { role } = req.query;
  try {
    let sql = 'SELECT * FROM users';
    let params = [];

    // If a role is provided, add a WHERE clause
    if (role) {
      sql += ' WHERE role = ?';
      params.push(role);
    }

    const [rows] = await db.query(sql, params);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No users found with that role." });
    }

    res.json(rows);
  }
  catch (err) {
    res.status(500).send({ error: err.message });
  }
});
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let sql = 'SELECT * FROM users where id= ?';
    const [result] = await db.query(sql, id);

    console.log(result);
    if (result.length===0) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(result);
  }
  catch (err) {
    res.status(500).send({ error: err.message });
  }
});


app.post("/users", async (req, res) => {
  console.log(req.body);
  const { name, email, role } = req.body;



  // Basic Validation
  if (!name || !email || !role) {
    return res.status(400).json({ error: "Please provide name, email, and role." });
  }
  try {
    const sql = 'INSERT INTO users (name, email, role) VALUES (?, ?, ?)';
    const [result] = await db.query(sql, [name, email, role]);
    res.status(201).json({
      message: "User created successfully!",
      user: result,
    });
  }
  catch (err) {
    // Handle duplicate email error
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: "Email already exists." });
    }
    res.status(500).json({ error: err.message });
  }
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  if (!role) {
    return res.status(400).json({ error: "New role is required." });
  }
  try {
    const sql = "UPDATE users SET role= ? where id= ? ";

  }

  catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});