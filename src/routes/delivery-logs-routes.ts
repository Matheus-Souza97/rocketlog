import { Router } from "express";
import { DeliveryLogsController } from "@/controllers/delivery-logs-controllers";

import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const deliveryLogsRoutes = Router()
const deliveryLogsController = new DeliveryLogsController()


deliveryLogsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["sale"]), deliveryLogsController.create)
deliveryLogsRoutes.get("/:delivery_id/show", ensureAuthenticated, verifyUserAuthorization(["sale", "customer"]), deliveryLogsController.show)
export {deliveryLogsRoutes}