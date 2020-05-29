require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  app = express(),
  ctrl = require("./controller"),
  { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/api/inventory", ctrl.readAll);
app.get("/api/inventory/:id", ctrl.readOne);
app.put("/api/inventory/:id", ctrl.update);
app.post("/api/inventory", ctrl.create);
app.delete("/api/inventory/:id", ctrl.delete);

app.listen(SERVER_PORT, () => console.log(`port: ${SERVER_PORT}`));
