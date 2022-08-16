// Prof.
import { CideService } from "../services/CideService"

class CideController{

    async calcular ( req, res){
        const { quantidade, tipo } = req.body

        const cideService = new CideService

        const valor = await cideService.calcularImposto(quantidade, tipo)

        return res.send ({ valor })

    }

}

export { CideController }