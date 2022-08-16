import { IofService } from "../services/IofService"
import { CalcInss } from "../services/inssServices"
import { Irpf } from "../services/impostoDeRendaMensalServices"
import {IrpfAnual} from "../services/impostoDeRendaAnual"

class IofController {
    async calcular (req, res){
        const { valorCompra, valorVenda } = req.body

        const iofService = new IofService

        const valorTotalCompra = await iofService.ImpostoIofCompra(valorCompra)
        const valorTotalVenda = await iofService.ImpostoIofVenda(valorVenda)

        return res.send({valorTotalCompra, valorTotalVenda})
    }
}

class ImpostoDeController {
    valorInss = 0
    async calcular (req, res){
        const { salarioBruto, valorInss, calculated } = req.body

        const calcInss = new CalcInss

        const valorTotalInss = await calcInss.CalculoInss(salarioBruto, valorInss, calculated)

        return res.send({valorTotalInss})  
    }
}

class ImpostoDeRenda {
    async calcularIr(req, res){
        const { salarioBruto, inss, valorIrrf, dependente, dependenteQuant, valorDependente } = req.body
        
        const calIr = new Irpf   
        
        const ir = await calIr.CalculoIrpf(salarioBruto, inss, valorIrrf, dependente, dependenteQuant, valorDependente)
        
        return res.send({ir})
    }

}

class ImpostoDeRendaAnual {
    async calcularTrA(req, res) {
        const { salarioBruto, inss, valorIrrf, dependente, dependenteQuant, valorDependente } = req.body
        
        const calIrA = new IrpfAnual

        const irAual = await calIrA.CalculoIrpf(salarioBruto, inss, valorIrrf, dependente, dependenteQuant, valorDependente)
        
        return res.send({irAual})
    }
}

export { ImpostoDeController, ImpostoDeRenda, IofController, ImpostoDeRendaAnual }