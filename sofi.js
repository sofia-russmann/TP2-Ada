// TRABAJO PRÁCTICO NÚMERO 2
// Integrantes: Gleyser y Sofía.

//1.1 precioMaquina(componentes)

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

// 1.3 vendedoraDelMes(mes, anio)

const vendedoraDelMes = (mes, anio) => {

    const filtrarPorMes = venta =>
        venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;

    const resultado = local.ventas.filter(filtrarPorMes);
    let maximoVendido = 0;
    let vendedoraQueMasVendio = "";

    for (let vendedora of local.vendedoras) {

        let ventasVendedora = 0;

        for (const venta of resultado) {
            let vendedoraVendio = venta.nombreVendedora
            if (vendedoraVendio === vendedora) {
                ventasVendedora += precioMaquina(venta.componentes);
            }
        }
        if (ventasVendedora > maximoVendido) {
            maximoVendido = ventasVendedora;
            vendedoraQueMasVendio = vendedora;
        }
    }
    return vendedoraQueMasVendio;

}
console.log(vendedoraDelMes(1, 2019));

// 1.5 ventasVendedora(nombre)

const ventasVendedora = nombre => {
    let ventasVendedora = 0;
    for (const venta of local.ventas) {
        let vendedoraVendio = venta.nombreVendedora
        if (vendedoraVendio === nombre) {
            ventasVendedora += precioMaquina(venta.componentes);
        }
    }
    return ventasVendedora;
}
console.log(ventasVendedora("Grace"));

// 1.7 huboVentas(mes, anio)

const huboVentas = (mes, anio) => {

    const filtrarPorMes = venta =>
        venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;

    const resultado = local.ventas.filter(filtrarPorMes);

    return resultado.length != 0;
}
console.log(huboVentas(1, 2019));

// 2.1

const agregarSucursalCentro = () => {
    for (let venta of local.ventas) {
        venta.sucursal = "Centro";
    }
}
agregarSucursalCentro();

// 2.2

local.sucursales = ['Centro', 'Caballito'];

// 2.3

const dataVentasActualizadas = [
    { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro" },
    { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito" },
    { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro" },
];
let ventasActualizadas = local.ventas.concat(dataVentasActualizadas);
local.ventas = ventasActualizadas;

//2.4 ventasSucursal(sucursal)

const ventasSucursal = sucursal => {
    let cantidadDeVentas = 0;
    for (const venta of local.ventas) {
        let ventaPorSucursal = venta.sucursal
        if (ventaPorSucursal === sucursal) {
            cantidadDeVentas += precioMaquina(venta.componentes);
        }
    }
    return cantidadDeVentas;
}
console.log(ventasSucursal("Centro"));

// 2.5

//Propongo una función general donde pueda jugarse con las variables "sucursal" y "vendedora"

const ventas = variable => {
    let sumaTotal = 0;
    for (const venta of local.ventas) {
        let ventaPorVariable = venta.variable
        if (ventaPorVariable === variable) {
            sumaTotal += precioMaquina(venta.componentes);
        }
    }
    return sumaTotal;
}

// 2.6 sucursalDelMes(mes, anio)

const sucursalDelMes = (mes, anio) => {

    const filtrarPorMes = venta =>
        venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;

    const resultado = local.ventas.filter(filtrarPorMes);
    let maximoVendido = 0;
    let sucursalQueMasVendio = "";

    for (let sucursal of local.sucursales) {

        let ventasSucursal = 0;

        for (const venta of resultado) {
            let sucursalVendio = venta.sucursal
            if (sucursalVendio === sucursal) {
                ventasSucursal += precioMaquina(venta.componentes);
            }
        }
        if (ventasSucursal > maximoVendido) {
            maximoVendido = ventasSucursal;
            sucursalQueMasVendio = sucursal;
        }
    }
    return sucursalQueMasVendio;

}
console.log(sucursalDelMes(1, 2019)); // 

