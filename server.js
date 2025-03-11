const express = require('express'); // Importation du framework Express
const app = express(); // Création de l'application Express

const PORT = 3000; // Définition du port

// Définition d'une route pour afficher "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
