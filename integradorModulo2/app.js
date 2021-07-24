const autos = require("./autos")
const concesionaria = 
    {
    autos : autos,

    buscarAuto : function (patente)
        {
        for(let i = 0; i < this.autos.length; i++)
            {
            if(patente == this.autos[i].patente)
                {
                return this.autos[i];
                }
            }
            return null;                
        },

    venderAuto : function (patente)
        {
            if(this.buscarAuto(patente) != null)
            {
                return this.buscarAuto(patente).vendido = true
            }
            else{return "No existe el vehículo"}          
        },

    autosParaLaVenta : function()
        {
            return this.autos.filter(autos => autos.vendido == false)
        },

    autosNuevos : function()
        {
            let autos0km = this.autosParaLaVenta()
            return autos0km.filter(autos => autos.km < 100)
        },

    listaDeVentas : function()
        {
        let autosVendidos = this.autos.filter(autos => autos.vendido == true)
        let ListaAutosVendidos = []
        for (i = 0;i < autosVendidos.length; i++)
            {
                ListaAutosVendidos.push(autosVendidos[i].precio)
            }
            return ListaAutosVendidos
        },

    totalDeVentas : function ()
        {
            let totalVentas = this.listaDeVentas();
            let sumaTotal = totalVentas.reduce((acum,num) => acum + num , 0);
            return sumaTotal;
        },

    puedeComprar : function (patente,persona)
        {
            let esteAuto = this.buscarAuto(patente);
            let precioAuto = esteAuto.precio
            let costoCuota = precioAuto / esteAuto.cuotas
            


        },
    };

    console.log(concesionaria.totalDeVentas())