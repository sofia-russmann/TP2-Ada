// TRABAJO PRÁCTICO NÚMERO 2
// Integrantes: Gleyser y Sofía.

// 1.2 cantidadVentasComponente(componente)

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

//1.4 ventasMes(mes, anio)

const ventasMes = (mes, anio) => {

    const ventaMesYAnio = local.ventas.filter(ventaMes => ventaMes.fecha.getMonth() === mes - 1 && ventaMes.fecha.getFullYear() === anio);

    const totalVentasMes = ventaMesYAnio.map(ventasM => ventasM.componentes);

    const ventasTotales = totalVentasMes.map(componente => precioMaquina(componente)).reduce((a, b) => a + b, 0);

    return ventasTotales;
}

console.log(`${ventasMes(1, 2019)}`);

//1.6 componenteMasVendido()

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


// 3.1 renderPorMes()
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

// 3.2 renderPorSucursal()

const renderPorSucursal = function () {
    let tituloInforme = 'Ventas por sucursal:';
    let informe = '';
    for (let i = 0; i < local.sucursales.length; i++) {
        informe += `\n Total de ${local.sucursales[i]}: $${ventasSucursal(local.sucursales[i])}`;
    }
    return tituloInforme + informe;
}
console.log(renderPorSucursal());

// 3.3 render()

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

