const http = require('http');
const httpProxy = require('http-proxy');
const path = require('path');
const fs = require('fs');

// Créer un proxy pour rediriger les requêtes PHP vers le serveur PHP
const proxy = httpProxy.createProxyServer({});

// Créer un serveur HTTP avec Node.js
const server = http.createServer((req, res) => {
    // Si l'URL se termine par .php, rediriger vers le serveur PHP
    if (req.url.endsWith('.php')) {
        proxy.web(req, res, { target: 'http://localhost:4000' }); // Serveur PHP
    } else {
        // Sinon, servir des fichiers statiques (HTML, CSS, JS)
        let filePath = '.' + req.url;
        if (filePath === './') {
            filePath = './index.html'; // Fichier par défaut
        }

        const extname = path.extname(filePath);
        let contentType = 'text/html';
        
        // Gérer les types de contenu pour différents fichiers
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
        }

        // Lire et servir le fichier
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('Page non trouvée');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

// Écouter les requêtes sur le port 3000
server.listen(3000, () => {
    console.log('Serveur Node.js en cours d\'exécution sur le port 3000');
});
