const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000; // Wybierz port, na którym ma działać serwer

const server = http.createServer((req, res) => {
  // Obsługa żądań HTTP

  // Sprawdź, czy żądanie jest do pliku index.html
  if (req.url === '/' || req.url === '/index.html') {
    // Odczytaj zawartość pliku index.html
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        // Jeśli wystąpił błąd podczas odczytu pliku, zwróć odpowiedni kod błędu
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Błąd serwera');
      } else {
        // Jeśli odczytano plik poprawnie, zwróć jego zawartość jako odpowiedź
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else if (req.url === '/index.js') {
    // Obsługa żądania do pliku index.js
    fs.readFile(path.join(__dirname, 'index.js'), (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Błąd serwera');
      } else {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.end(data);
      }
    });
  } else {
    // Obsługa innych żądań (np. zasobów CSS, obrazów)
    // Tutaj możesz dodać dodatkową obsługę żądań w zależności od potrzeb
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
