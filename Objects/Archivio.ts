import { Libro } from "./Libro";

export class Archivio {
  lista: Array<Libro>

constructor() {
  this.lista = new Array<Libro>;
}

ricercaLibri(chiave: string) {
 return this.lista.filter(libro => {
    libro.titolo.toLowerCase().includes(chiave.toLowerCase()) ||
    libro.autore.toLowerCase().includes(chiave.toLowerCase()) ||
    libro.posizione.toLowerCase().includes(chiave.toLowerCase())
  });
}
  aggiungiLibri(libro: string) {
    this.lista.push(libro);
  }
  
  rimuoviLibri(titolo: string, autore: string) {
    this.lista = this.lista.filter(libro => {
      libro.titolo !== titolo || libro.autore !== autore)
  });
}









