import { Libro } from './Objects/Libro';
import { Archivio } from './Objects/Archivio';

// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// visualizzazione per la console //

const archivio = new Archivio();

archivio.aggiungiLibro('Harry Potter', 'JK Rowling', 'ISBN123');
archivio.aggiungiLibro('Il Signore degli Anelli', 'J.R.R. Tolkien', 'ISBN456');
archivio.aggiungiLibro('Il Signore degli Anelli', 'J.R.R. Tolkien', 'ISBN456');

console.log(archivio.lista);

console.log(archivio.trovaLibro('ISBN456'));

archivio.rimuoviLibro('ISBN456');
console.log('Lista libri dopo rimozione:', archivio.lista);
