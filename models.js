const mongoose = require('mongoose');

const Videojuego = mongoose.model('Videojuego',
  new mongoose.Schema({ titulo: String, genero: String })
);

const Videoconsola = mongoose.model('Videoconsola',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
    Videojuego: Videojuego,
    Videoconsola: Videoconsola
}