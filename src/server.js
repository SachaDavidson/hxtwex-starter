const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

// Define the path to static content
const publicDirPath = express.static(path.join(__dirname, "../public"));

//Adding the static path to express app
app.use(publicDirPath);

// Add middleware to convert form post body to js object
app.use(express.urlencoded({ extended: true }));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/hxworked", (req, res) => {
  res.send(`<h1 style="color:red;">If this text is red HTMX worked.</h1>
        <h2 class="text-center">If this text is centered Tailwind worked</h2>
        `);
});

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
