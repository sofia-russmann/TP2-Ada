// TRABAJO PRÁCTICO NÚMERO 2
// Integrantes: Gleyser y Sofía.
// Ejercicios:
//1- Funciones:
//precioMaquina(componentes) SOFI
// cantidadVentasComponente(componente): GLEY
// vendedoraDelMes(mes, anio) usar precioMaquina SOFI 
// ventasMes(mes, anio): GLEY
// ventasVendedora(nombre): SOFI
// componenteMasVendido(): usar cantidadVentasComponente GLEY
// huboVentas(mes, anio): SOFI
//2-
//3-

//precioMaquina(componentes)

const precioMaquina = componentes => {
    let precioTotal = 0;
    for (let component of componentes) {
        for (let compo of local.precios) {
            if (component === compo.componente) {
                precioTotal += compo.precio;
            }
        } 
    }
    return precioTotal;
}
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));


// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de 
// la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas.
// El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va 
// desde el 1 (enero) hasta el 12 (diciembre).
// console.log( vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

//Recorrer todos los componentes vendidos e ir sumandoselos a la vendedora que corresponda

// const vendedoraDelMes = (mes, anio) => {

//     if (){
//         return 
//     }
// }

// console.log(vendedoraDelMes(1, 2019));


// ventasVendedora(nombre)

const ventasVendedora = nombre => 
{
    let ventasVendedora= 0;
    for (const venta of local.ventas) {
        let vendedoraVendio = venta.nombreVendedora 
        if (vendedoraVendio === nombre) {
            ventasVendedora += precioMaquina(venta.componentes);
        }
    }
    return ventasVendedora;
}
console.log(ventasVendedora("Grace"));


// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.
// El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
// console.log( huboVentas(3, 2019) ); // false

// const obtenerHuboVentas = (mes, anio) => {
//     const filtrarPorMes = mesDeVentas =>
//     mesDeVentas.fecha === mes;

//     const resultado = mes.filter(filtrarPorMes);

//     return resultado[0].ultimoRecital.anio === anio
// }

// console.log( huboVentas(3, 2019) );
// console.log( huboVentas(0, 2019) );
// console.log( huboVentas(1, 2019) );
// console.log( huboVentas(5, 2019) );