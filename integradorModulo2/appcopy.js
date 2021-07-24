const autos = require("./autos")
const concesionaria = 

    {autos : autos,
    autosParaLaVenta : function(){
        return this.autos.filter(autos => autos.vendido == false)
                                },
    }
    console.log(concesionaria.autosParaLaVenta());