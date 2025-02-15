const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors')
connectToMongo();
const app = express();
const port = 5000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
/* =================== Costomize Routes Api ================== */
  app.use("/api/auth", require("./routes/auth")),
  app.use("/api/notes", require("./routes/notes")),
  app.get("/", (req, res) => {
    res.send("Hello Haider!");
  });

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
