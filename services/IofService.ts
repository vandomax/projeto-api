class IofService {
    async ImpostoIofCompra (valorCompra: number){
        var taxaDeCambio = 5.34
        var porcentagemIof = 0.011

        var totalEmReal = taxaDeCambio * valorCompra
        var iof = totalEmReal * porcentagemIof
        var totalAPagar = totalEmReal + iof

        return "R$ " + totalAPagar.toFixed(2)
    }
    async ImpostoIofVenda(valorVenda: number) {
        var taxaDeCambio = 5.34
        var porcentagemIof = 0.0038

        var totalEmReal = taxaDeCambio * valorVenda
        var iof = totalEmReal * porcentagemIof
        var totalAReceber = totalEmReal - iof

        return "R$ " + totalAReceber.toFixed(2)
    }
}

export { IofService }