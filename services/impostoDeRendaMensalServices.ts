//obj inss
class Irpf {
    async CalculoIrpf(salarioBruto: number, inss: number, valorIrrf: number, dependente: boolean, dependenteQuant: number, valorDependente: number) {
        if(dependente == true) {
            valorDependente = dependenteQuant * 189.59
        }

        salarioBruto = salarioBruto - inss - valorDependente
        
        if(salarioBruto <= 1903.98) {
            return "Isento"
        } else {
            if(salarioBruto >= 1903.99 || salarioBruto <= 2826.65) {
                valorIrrf = (salarioBruto * 0.075) - 142.80
            } else if(salarioBruto >= 2826.66 || salarioBruto <= 3751.05) {
                valorIrrf = (salarioBruto * 0.15) - 354.80
            } else if(salarioBruto >= 3751.06 || salarioBruto <= 4664.68) {
                valorIrrf = (salarioBruto * 0.225) - 636.13
            } else if(salarioBruto >= 4664.68) {
                valorIrrf = (salarioBruto * 0.275) - 869.36
            }
        }
        return "Voce ira pagar de Imposto de Renda mensal: " + valorIrrf.toFixed(2)        
    }
}

export { Irpf }