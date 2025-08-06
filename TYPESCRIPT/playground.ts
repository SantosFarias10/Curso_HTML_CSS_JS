/*
let x: number;   //Declaracion explicita
//x = "three" ERROR
let y = 1;   //Declaracion implicita
//y = "three" ERROR
let z;   //Declaracion sin inicializacion
//z = "three" good
*/

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

/*
let randomValue: unknown = 10;
randomValue = true;
randomValue = "Santos";

(randomValue as string).toUpperCase();   // Trata a randomValue como si fuera un string para poder usar el metodo
(<string>randomValue).toUpperCase();   // Otra forma de tratar a randomValue como si fuera un string

if (typeof randomValue == "string") {   // En el caso de que randomValue es un string
    randomValue.toLocaleLowerCase() // Usa el metodo
}
*/

/*
// Basicamente es una funcion que siempre  devuelve mensaje de error, es por eso que la funcion nunca devuelve NADA
function throwError(message: string): never {
    throw new Error(message);
}
*/

//Tipo "Union"
/*
let multiType: number | string;
multiType = "veinte"    //OK
multiType = 20; //OK
//multiType = true;   //ERROR

function add(x: number | string, y:number | string) {
    if(typeof x == "number" && typeof y == "number"){
        return x + y;
    }

    if(typeof x == "string" && typeof y == "string"){
        return x + y;
    }

    throw new Error("You\"re mixing types!!!")
}

add(1, 3);   //4
add("one", "two");  //"onetwo"
*/

//Tipo "Interseccion"
/*
interface Employee {
    employeeID: number;
    age: number;
}

interface Manager {
    stockPlan: boolean;
}

const person: Employee & Manager = {    //Es como un and, tiene que ser un Employee Y un Manager
    employeeID: 123,
    age: 10,
    stockPlan: true
} //Otra forma de hacerlo es definir un type EmployeeManager = Employee & Manager
*/

// Tipos Literales
/*
type answer = "yes" | "no" | "maybe"

//let result: answer = "pepe" //ERROR
let result: answer = "yes"  //OK
result = "no"   //OK
*/

//Tipos de Coleccion
//Array
/*
let list: number[] = [1, 2, 3]
list[0]
//Otra forma de definir un array let list: Array<number> = [1, 2 ,3]
*/

//Tuplas
/*
let person: [string, number] = ["Santos", 22];
*/

// type Alias
/*
type Hero = {
    name: string,
    age: number
}

let hero: Hero = {
    name: "Thor",
    age: 19
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return { name, age };
}

//const thor = createHero("thor", 10);    //MAL
const thor = createHero({ name: "Thor", age: 100}); //BIEN
*/

//Optional properties
/*
type Hero = {
    readonly id?: number //propiedad opcional. readonly dice que solamente sea de lectura, osea no se puede acceder a id, ni cambiar el valor
    name: string,
    age: number,
    isActive ?: boolean //propiedad opcional
}

let hero: Hero = {
    name: "Thor",
    age: 19
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return { name, age, isActive: true };
}

const thor = createHero({ name: "Thor", age: 100}); //BIEN
console.log(thor.isActive)  //--> true

thor.id?.toString() //encadenamiento opcional, si es que tiene una id lo ejecuta, si no lo evita
*/

