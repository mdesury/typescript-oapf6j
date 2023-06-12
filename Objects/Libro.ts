
 export class Libro {
  titolo: string;
  autore: string;
  posizione: string;
  prestito: string;

  constructor(titolo:string, autore:string, posizione:string, prestito: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.posizione = posizione;
    this.prestito = prestito;
  }

  Ricerca: string = "";
  libriTrovati: [];

  RicercaTitolo() {
    this.libriTrovati = this.titolo.filter(libro) {
      libro.titolo.toLowerCase().includes(this.Ricerca.toLowerCase())
    });

  RicercaAutore() {
    this.libriTrovati = this.autore.filter(libro) {
      libro.autore.toLowerCase().includes(this.Ricerca.toLowerCase())
    });
}




