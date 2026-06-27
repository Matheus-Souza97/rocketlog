import { Request, Response } from "express";
import { z } from "zod"

class DeliveryLogsController {
  async create(request: Request, response:Response){
    const bodySchema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string()
    })
    return response.json({message: "ok"})
  }
}

export { DeliveryLogsController}