alert ("Calcularemos el sueldo promedio de la empresa");

//Declaracion de variables

let sueldoPromedio= 0 ;
let i= 0; 


let ingresar = prompt ("Desea ingresar un sueldo? (s/n):"); 

if (ingresar== "s") {
    do {
        let sueldo = prompt ("Sueldo:");
        
        ingresar= prompt("¿Desea ingresar otro sueldo? (s/n)"); 
        
        sueldoPromedio = (sueldoPromedio + parseInt(sueldo));
        i++;
    }while (ingresar== "s");

    sueldoPromedio = (sueldoPromedio/i);
    alert ("El Promedio es: " + sueldoPromedio);
} else {
    console.log ("Adios");
}

