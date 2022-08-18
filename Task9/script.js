/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    validation() {
        if (typeof (this.title) !== 'string' || typeof (this.director) !== 'string' || typeof (this.budget) !== 'number') {
            throw new Error("Invalid data");
        }
    }
    wasExpensive() {
        this.validation();
        return this.budget > 100000000;
    }
}

const myInstance = new Movie('Rambo the first blood', 'Ted Kotcheff', 15000000);

console.log('is budget more than 100 millions? :', myInstance.wasExpensive());