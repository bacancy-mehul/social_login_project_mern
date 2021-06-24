import { Router } from "express";
import * as UserCtrl from "../../controllers/user/user.controller";
import  userValidation  from "../../validators/User/user.validator";
import { validate } from "../../validators/validate";
// import { authMiddleware } from "../../middleware/auth";

const routes = new Router();

routes
  .route("/google/auth")
  .post(
    userValidation.googleValidationRules(),
    validate,
    UserCtrl.googleLogin
  );

export default routes;
