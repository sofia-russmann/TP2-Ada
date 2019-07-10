// TRABAJO PRÁCTICO NÚMERO 2
// Integrantes: Gleyser y Sofía.
// Ejercicios:
//1- Funciones:
// 1.1precioMaquina(componentes) SOFI
// 1.2cantidadVentasComponente(componente): GLEY
// 1.3 vendedoraDelMes(mes, anio) usar precioMaquina SOFI 
// 1.4 ventasMes(mes, anio): GLEY
// 1.5 ventasVendedora(nombre): SOFI
// 1.6 componenteMasVendido(): usar cantidadVentasComponente GLEY
// 1.7 huboVentas(mes, anio): SOFI
//2-SOFI
//3-GLEY

// 1.2 cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, 
// o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está
// identificada por la variable ventas.

const cantidadVentasComponente = (componenteABuscar) => {
    let cantidadVentas = 0
    for (let venta of local.ventas) {
        for (let componente of venta.componentes) {
            if (componente === componenteABuscar) {
                cantidadVentas += 1
            }
        }
    }
    return cantidadVentas
}

console.log(cantidadVentasComponente("Monitor ASC 543"));

//1.4 ventasMes(mes, anio): Obtener las ventas de un mes. 
// El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) => {

    const ventaMesYAnio = local.ventas.filter(ventaMes => ventaMes.fecha.getMonth() === mes - 1 && ventaMes.fecha.getFullYear() === anio);

    const totalVentasMes = ventaMesYAnio.map(ventasM => ventasM.componentes);

    const ventasTotales = totalVentasMes.map(componente => precioMaquina(componente)).reduce((a, b) => a + b, 0);

    return ventasTotales;
}

console.log(`${ventasMes(1, 2019)}`);

//1.6 componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

const componenteMasVendido = () => {
    const componentes = local.precios.map(elemento => elemento.componente)
    let componenteConMayorVentas = '';
    let mayorCantidadDeComponentes = 0;
    for (componente of componentes) {
        const componenteVendido =
            cantidadVentasComponente(componente);

        if (componenteVendido > mayorCantidadDeComponentes) {
            mayorCantidadDeComponentes = componenteVendido;
            componenteConMayorVentas = componente;
        }
    }
    return componenteConMayorVentas;
}
console.log(componenteMasVendido());

// 3. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre 
// las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

// 3.1 renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
// console.log( renderPorMes() );
// // Ventas por mes:
// // Total de enero 2019: 1250
// // Total de febrero 2019: 4210
const renderPorMes = () => {

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const anios = obtenerAnios()

    let resultado = `Ventas por mes: \n`
    for (let j = 0; j < anios.length; j++) {
        for (let i = 0; i < meses.length; i++) {
            if (ventasMes(i + 1, anios[j]) > 0) {
                resultado += `Total de ${meses[i]} ${anios[j]}: ${ventasMes(i + 1, anios[j])} \n`
            }
        }
    }

    return resultado;
}

const obtenerAnios = () => {
    const anios = [];
    for (let venta of local.ventas) {
        if (!anios.includes(venta.fecha.getFullYear()))
            anios.push(venta.fecha.getFullYear())
    }
    return anios

}
console.log(renderPorMes());

// 3.2 renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
// console.log( renderPorSucursal() );
// // Ventas por sucursal:
// // Total de Centro: 4195
// // Total de Caballito: 1265

const renderPorSucursal = function () {
    let tituloInforme = 'Ventas por sucursal:';
    let informe = '';
    for (let i = 0; i < local.sucursales.length; i++) {
        informe += `\n Total de ${local.sucursales[i]}: $${ventasSucursal(local.sucursales[i])}`;
    }
    return tituloInforme + informe;
}
console.log(renderPorSucursal());

// 3.3 render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y 
// la vendedora que más ingresos generó
// console.log( render() );
// // Reporte
// // Ventas por mes:
// //   Total de enero 2019: 1250
// //   Total de febrero 2019: 4210
// // Ventas por sucursal:
// //   Total de Centro: 4195
// //   Total de Caballito: 1265
// // Producto estrella: Monitor GPRS 3000
// // Vendedora que más ingresos generó: Grace

const vendedoraConMasIngresosGenerados = () => {
    let masVentas = 0;
    let vendedoraConMasIngresos = "";
    for (vendedora of local.vendedoras) {
        if (ventasVendedora(vendedora) >= masVentas) {
            masVentas = ventasVendedora(vendedora);
            vendedoraConMasIngresos = vendedora;
        }
    }
    return vendedoraConMasIngresos;
}
const render = () => {
    let renderCompleto =
        (`Reporte 
${renderPorMes()}
${renderPorSucursal()}
Vendedora con más ingresos: ${vendedoraConMasIngresosGenerados()}
Componente más vendido: ${componenteMasVendido()}`);

    return renderCompleto;
}
console.log(render());

