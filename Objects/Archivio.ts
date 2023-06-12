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
    libro.posizione.toLowerCase().includes(chiave.toLowerCase()) ||
    libro.prestito.toLowerCase().includes(chiave.toLowerCase())
  });

}


