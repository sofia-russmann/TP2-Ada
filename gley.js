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

// ------------------------------------- CANTIDAD VENTAS COMPONENTE (COMPONENTE) 

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


// ------------------------------------- VENTAS MES (MES, ANIO) 

const ventasMes = (mes, anio) => {

    const ventaMesYAnio = local.ventas.filter(ventaMes => ventaMes.fecha.getMonth() === mes - 1 && ventaMes.fecha.getFullYear() === anio);

    const totalVentasMes = ventaMesYAnio.map(ventasM => ventasM.componentes);

    const ventasTotales = totalVentasMes.map(componente => precioMaquina(componente)).reduce((a, b) => a + b);

    return ventasTotales;
}

console.log(`${ventasMes(1, 2019)}`);

// ---------------------------COMPONENTE MAS VENDIDO 

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

// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
// console.log( renderPorMes() );
// // Ventas por mes:
// //   Total de enero 2019: 1250
// //   Total de febrero 2019: 4210

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',];
















// renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
// console.log( renderPorSucursal() );
// // Ventas por sucursal:
// //   Total de Centro: 4195
// //   Total de Caballito: 1265



// render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y 
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