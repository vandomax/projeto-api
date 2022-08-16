import { ImpostoDeController, ImpostoDeRenda, IofController, ImpostoDeRendaAnual } from "./controllers/impostosController"

const iofController = new IofController()
const inss = new ImpostoDeController()
const imposto = new ImpostoDeRenda()
const impostoAnual = new ImpostoDeRendaAnual()

const express = require('express')
const app = express()

app.use(express.json())

app.post("/inss", inss.calcular)
app.post("/imposto", imposto.calcularIr)
app.post("/impostoAnual", impostoAnual.calcularTrA)
app.post("/iof", iofController.calcular)

app.listen(3333, () => console.log("Servidor executando na porta 3333"))
