module.exports = app => {
    const peliculas = require("../controllers/pelicula.controllers.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", peliculas.create);
    // Retrieve all Client
    router.get("/", peliculas.findAll);
    // Retrieve all published Client
    router.get("/status", peliculas.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:nombre", peliculas.findOne);
    // Update a Client with id
    router.put("/update/:nombre", peliculas.update);
    // Delete a Client with id
    router.delete("/delete/:nombre", peliculas.delete);
    // Delete all Cliente
    router.delete("/delete/", peliculas.deleteAll);
    // Podemos utilizar como una opcion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/estudiante/
    app.use("/api/vista", router);
};