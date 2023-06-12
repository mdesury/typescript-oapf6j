import { Libro } from "./Libro";

export class Archivio {
  lista: Array<Libro>

constructor() {
  this.lista = new Array<Libro>;
}

ricercaLibro(chiave: string) {
 return this.lista.filter(libro => {
    return libro.titolo.toLowerCase().includes(chiave.toLowerCase()) ||
    libro.autore.toLowerCase().includes(chiave.toLowerCase()) ||
    libro.codice.toLowerCase().includes(chiave.toLowerCase())
  })
} 

trovaLibro(codice: string) {
  return this.lista.filter(libro => {
    return libro.codice === codice;
  })[0];
}

aggiungiLibro(titolo: string, autore: string, codice: string) {
  if (!this.trovaLibro(codice)) {
    this.lista.push(new Libro(titolo, autore, codice, ""));
  }
}
  
rimuoviLibro(codice: string) {
    this.lista = this.lista.filter(libro => {
      return libro.codice !== codice
  });
}
}















