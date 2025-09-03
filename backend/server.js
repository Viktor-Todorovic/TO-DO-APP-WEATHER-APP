const express = require('express');
const cors = require('cors');
const db = require('./db.js'); // tvoj db.js

const app = express();

// Middleware
app.use(cors()); // dozvoljava zahteve sa svih portova
app.use(express.json());

// Root ruta za test
app.get('/', (req, res) => {
    res.send('Server radi!');
});

// GET ruta za sve korisnike
app.get('/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        console.log('Dohvaćeni korisnici:', rows); // debug u konzoli
        res.json(rows);
    } catch (err) {
        console.error('Greška prilikom dohvatanja korisnika:', err);
        res.status(500).json({ error: 'Došlo je do greške' });
    }
});

// Pokretanje servera
const PORT = 5000; // ili port koji želiš
app.listen(PORT, () => console.log(`Server radi na portu ${PORT}`));

