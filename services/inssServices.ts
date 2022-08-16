// {
// 	"salarioBruto": 36000,
// }
class CalcInss {
    async CalculoInss(salarioBruto: number, valorInss: number, calculated: boolean){
        // primeira faixa
        if (salarioBruto <= 1100){
            valorInss += salarioBruto * 0.07
            calculated = true
        } else if (!calculated) {
            valorInss = 1100 * 0.07
        }
        // segunda faixa
        if (salarioBruto <= 2203.48 && !calculated){
            valorInss += (salarioBruto - 1100.01) *  0.09
            calculated = true
        } else if (!calculated) {
            valorInss += (2203.48 - 1100.01) * 0.09
        } 
        // terceira faixa
        if (salarioBruto <= 3305.22 && !calculated){
            valorInss += (salarioBruto - 2203.49) *  0.12
            calculated = true

        } else if (!calculated) {
            valorInss += (3305.22 - 2203.49) * 0.12
        }
        // quarta faixa
        if (salarioBruto <= 6433.57 && !calculated) {
            valorInss += (salarioBruto - 3305.23) *  0.14
            calculated = true

        } else if (!calculated) {
            valorInss += (6433.57 - 3305.23) * 0.14
        }
        return "INSS: " + valorInss.toFixed(2)
    }
}

export { CalcInss }