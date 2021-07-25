const clientes = require("./clientes")

const autos = require("./autos")

const concesionaria = {
    clientes : clientes,
    autos : autos,
    buscarAuto : function (patente){
        for(let i = 0; i < this.autos.length; i++){
            if(patente == this.autos[i].patente){
                return this.autos[i];
            }
        }
        return  null;
    },
    venderAuto : function (patente){
        let auto = this.buscarAuto(patente);
        if(auto){
            auto.vendido = true;
        }
    },
    autosParaLaVenta : function () {
        return this.autos.filter(autos => autos.vendido == false);
    },
    autosNuevos : function (){
        let listaAutosParaLaVenta = this.autosParaLaVenta();
        return listaAutosParaLaVenta.filter(autos => autos.km < 100);
    },

    listaDeVentas : function () {
        autosVendidos = [];
        let vendidos = this.autos.filter(autos => autos.vendido == true);
        for(i = 0; i < vendidos.length; i++){
            autosVendidos.push(vendidos[i].precio);
        }
        return autosVendidos;
    },
    totalDeVentas : function(){
        let ventasAutos = this.listaDeVentas();
        let ventasTotales = ventasAutos.reduce((total, valorVentaAuto) => total + valorVentaAuto, 0);
        return ventasTotales;
    },
    buscarPersona : function (nombre){
        for(let i = 0; i < this.clientes.length; i++){
            if(nombre == this.clientes[i].nombre){
                return this.clientes[i];
            }
        }
        return  null;
    },
    puedeComprar : function(patente, nombre){
        let esteAuto = this.buscarAuto(patente);
        let precioAuto = esteAuto.precio;
        let costoCuota = precioAuto / esteAuto.cuotas;
        let comprador = this.buscarPersona(nombre);
        if (precioAuto < comprador.capacidadDePagoTotal && costoCuota < comprador.capacidadDePagoEncuotas){
            return true;
        }else{
            return false;
        }
    },
    autosQuePuedeComprar : function (nombre){
        let autosParaVender = this.autosParaLaVenta();
        let estosAutos = [];
        for(i = 0; i < autosParaVender.length; i++){
            if(this.puedeComprar(autosParaVender[i].patente, nombre) == true)
            {
                estosAutos.push(autosParaVender[i]);
            }
        }
        return estosAutos.length == 0 ? "Chupala" : estosAutos;
        },
}

//console.log(concesionaria.puedeComprar("AC830HI", "Nahue"));

// console.log(concesionaria.autosQuePuedeComprar("Cris"));














