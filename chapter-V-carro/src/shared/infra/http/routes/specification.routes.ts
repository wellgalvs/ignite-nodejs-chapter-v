import { Router } from "express";

import { CreateSpecificationsController } from "@modules/cars/useCases/createSpecification/CreateSpecificationsController";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

// specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationsController.handle
);

export { specificationRoutes };