import { body } from "express-validator";

class UserValidation {
  googleValidationRules() {
    return [body("tokenId", "Not a Valid token").isJWT()];
  }
}

let userValidation = new UserValidation();

export default userValidation;
