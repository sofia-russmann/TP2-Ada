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
//2-SOFI
//3-GLEY

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


// 1.3 vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de 
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


// 1.5 ventasVendedora(nombre)

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


// 1.7 huboVentas(mes, anio)

const huboVentas = (mes, anio) => {
    
    const filtrarPorMes = venta =>
    venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio;

    const resultado = local.ventas.filter(filtrarPorMes);

    return resultado.length != 0;
}
console.log(huboVentas(1, 2019));


// 2

//Recorrer cada item de ventas y agregar "sucursal["Centro"]"
//En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro
// (ya que es la sucursal original).
// En cada venta del local agregar luego de componentes "sucursal" con el valor "centro"
//sucursal: "Centro"
// 


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

const ventasSucursal = sucursal => 
{
    let cantidadDeVentas= 0;
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

//Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad 
// pero trabajando con una propiedad distinta.
// Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?


// 2.6 sucursalDelMes(mes, anio)

//Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el 
// nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas.
// El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde 
// el 1 (enero) hasta el 12 (diciembre).



