"use strict";
/*
let x: number;   //Declaracion explicita
//x = "three" ERROR
let y = 1;   //Declaracion implicita
//y = "three" ERROR
let z;   //Declaracion sin inicializacion
//z = "three" good
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
enum ContractStatus {
    Permant,    //0
    Temp,   //1
    Apprentice  //2
}

const employeeStatus: ContractStatus = ContractStatus.Temp;
//      constante          Tipo               valor
console.log(employeeStatus);

console.log(ContractStatus[employeeStatus])
*/
let randomValue = 10;
randomValue = true;
randomValue = "Santos";
randomValue.toUpperCase(); // Trata a randomValue como si fuera un string para poder usar el metodo
randomValue.toUpperCase(); // Otra forma de tratar a randomValue como si fuera un string
if (typeof randomValue == "string") { // En el caso de que randomValue es un string
    randomValue.toLocaleLowerCase(); // Usa el metodo
}
//# sourceMappingURL=playground.js.map