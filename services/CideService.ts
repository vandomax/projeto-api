// Prof.
// MODELO

class CideService {

    async calcularImposto(quantidade: number, tipo: string){
        if (tipo === "gasolina"){
            return quantidade = 0.1
        }else if (tipo === "diesel"){
            return quantidade = 0.05
        }
    }

}

export { CideService }