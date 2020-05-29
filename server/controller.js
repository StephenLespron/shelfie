module.exports = {
  readAll: (req, res, next) => {
    const db = req.app.get("db");

    db.read_all()
      .then((inv) => res.status(200).send(inv))
      .catch((err) => res.status(500).send(console.log(err)));
  },
  readOne: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.read_one(id)
      .then((inv) => res.status(200).send(inv))
      .catch((err) => res.status(500).send(console.log(err)));
  },
  create: (req, res) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db.create(name, price, img)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(console.log(err)));
  },
  update: (req, res) => {
    const db = req.app.get("db"),
      { id } = req.params,
      { name, price, img } = req.body;

    db.update(id, name, price, img)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(console.log(err)));
  },
  delete: (req, res) => {
    const db = req.app.get("db"),
      { id } = req.params;

    db.delete(id)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(console.log(err)));
  },
};
