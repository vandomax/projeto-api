// Insonia
// {
// 	"salarioBruto": 3000,
// 	"inss": 271.89
// 	"dependente": true,
// 	"dependenteQuant": 2,
// }
class IrpfAnual {
    async CalculoIrpf(salarioBruto: number, inss: number, valorIrrf: number, dependente: boolean, dependenteQuant: number, valorDependente: number) {
        salarioBruto = salarioBruto * 12
        inss = inss * 12

        if(dependente == true) {
            valorDependente = dependenteQuant * 2275.08
        }

        salarioBruto = salarioBruto - inss - valorDependente

        if(salarioBruto <= 22847.76) {
            return "Isento"
        } else {
            if(salarioBruto >= 22847.77 || salarioBruto <= 33919.80) {
                valorIrrf = (salarioBruto * 0.075) - 1713.58
            } else if(salarioBruto >= 33919.81 || salarioBruto <= 45012.60) {
                valorIrrf = (salarioBruto * 0.15) - 4257.57
            } else if(salarioBruto >= 45012.61 || salarioBruto <= 55976.16) {
                valorIrrf = (salarioBruto * 0.225) - 7633.51
            } else if(salarioBruto >= 55976.16) {
                valorIrrf = (salarioBruto * 0.275) - 10432.32
            }
        }
        return "Voce ira pagar de Imposto de Renda anual: " + valorIrrf.toFixed(2)
            
    }
}

export { IrpfAnual }