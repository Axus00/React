//import { heroes } from './data/heores.js'
//console.log(heroes)

import {heroes, owners} from "./data/heores";
console.log(owners)

const getHeoeById = (id) => {
    return heroes.find((heroe) => heroe.id === id ? heroe : false)
}
console.log(getHeoeById(2));

const getHeroeByOwner = (owner) => {
    return heroes.filter(h => h.owner === owner);
}
console.log(getHeroeByOwner('Marvel'))