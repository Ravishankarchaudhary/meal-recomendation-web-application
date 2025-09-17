require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const axios = require("axios");

// Import DB and Models
const connectDB = require("./db");
const User = require("./models/user");

const app = express();
const Port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to DB
connectDB();

// ===== Static Files =====
app.use(express.static(path.join(__dirname, "public")));

// ===== Frontend Routes =====
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/HomePage", "startpage.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public/Register", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/Login", "login1.html"));
});

// ===== User Auth =====
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering user. Username/Email might already exist.");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("User not found!");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid password!");

    res.send("User logged in successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in...");
  }
});

// ===== Recipe Search API =====
app.get("/api/recipes", async (req, res) => {
  try {
    
    const search = req.query.search || "";
    const apiKey = process.env.SPOONACULAR_API_KEY;

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          query: search,
          number: 10,
          addRecipeInformation: true,
          apiKey: apiKey,
        },
      }
      
    );
    
    const results = response.data.results.map(r => ({
      id: r.id,
      name: r.title,
      image: r.image,
      link: `/Recipie/recipe.html?id=${r.id}`, // link to detailed page
      recipe: r.summary,
    }));
    console.log("API Response results count:", response.data.results.length); 

    res.json(results);
  } catch (err) {
    console.log(err.response?.data || err.message);
    res.status(500).json({ error: "Error fetching recipes from Spoonacular" });
  }
});

// ===== Detailed Recipe API =====
app.get("/api/recipes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const apiKey = process.env.SPOONACULAR_API_KEY;

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      { params: { apiKey } }
    );

    const data = response.data;
    const recipeDetails = {
      id: data.id,
      title: data.title,
      image: data.image,
      instructions: data.instructions,
    };

    res.json(recipeDetails);
  } catch (err) {
    console.log(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch recipe details" });
  }
});

// ===== Start Server =====
app.listen(Port, () => {
  console.log(`Server running → http://localhost:${Port}`);
});
