const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "server/views"); // Specify the views directory

// Routes
const indexRouter = require("./server/routes/index");
const aboutRoute = require("./server/routes/about");
const serviceRoute = require("./server/routes/service");
const contactusRoute = require("./server/routes/contactus");
// Add more route files as needed...

app.use("/", indexRouter);
app.use("/about", aboutRoute);
app.use("/service", serviceRoute);
app.use("/contactus", contactusRoute);
// Add more route middleware as needed...

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
