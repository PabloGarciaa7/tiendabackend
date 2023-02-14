const { Videoconsola, Videojuego } = require("./models.js");

// ------- VIDEJUEGOS
exports.readVideojuegos = (req, res) =>
Videojuego.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readVideojuego = (req, res) =>
Videojuego.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteVideojuego = (req, res) =>
Videojuego.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateVideojuego = (req, res) =>
Videojuego.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { titulo: req.body.titulo, genero: req.body.genero } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createVideojuego = (req, res) =>
    new Videojuego({ titulo: req.body.titulo, genero: req.body.genero })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ Videoconsolas

exports.readVideoconsolas = (req, res) =>
Videoconsola.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readVideoconsola = (req, res) =>
Videoconsola.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteVideoconsola = (req, res) =>
Videoconsola.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateVideoconsola = (req, res) =>
Videoconsola.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createVideoconsola = (req, res) =>
    new Videoconsola({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });