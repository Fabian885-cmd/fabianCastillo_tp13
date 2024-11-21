let deposito = [500, 600, 200]; 
let retiro = [150, 50, 20];
let saldoActual = 0;
let depositoTotal = 0;
let retiroTotal = 0;
let nombre = "Alex";
let apellido = "Castillo";

function calculateBalances(deposito, retiro){
    for (var i = 0; i < deposito.length; i++) {
        depositoTotal += deposito[i]
    }
    for (var i = 0; i < retiro.length; i++) {
        retiroTotal += retiro[i]
    }
    saldoActual = depositoTotal - retiroTotal;
}
function bankBalance(nombre, apellido, deposito, retiro){
    calculateBalances(deposito, retiro);

    console.log(`Estimada ${nombre} ${apellido}.\nEl monto total de los depósitos es de: $${depositoTotal}.\nEl monto total de los retiros es de: $${retiroTotal}.\nPor lo tanto, su saldo actual en la cuenta es de: $${saldoActual}. `)
}

bankBalance(nombre, apellido, deposito, retiro)