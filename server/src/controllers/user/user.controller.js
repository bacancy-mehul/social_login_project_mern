import { verifyToken } from "../../config/google/googleAuth";
import { httpError, httpResponse } from "../../helpers/utility";
import * as JWTAuth from "../../helpers/jwt";
import * as userBin from "../../bin/user/user";

export const googleLogin = async (req, res) => {
  try {
    let payload = await verifyToken(req.body.tokenId);
    if (!payload.email_verified) throw new Error("Email is not verified");
    let existingUser = await userBin.userExist(payload);
    if (!existingUser) {
      existingUser = await userBin.adduser(payload);
    }

    let token = await JWTAuth.createToken({
      _id: existingUser._id,
      email: existingUser.email,
    });
    let data = {
      accessToken: token,
    };
    return httpResponse(res, "User logged in successfully", data);
  } catch (error) {
    return httpError(res, error);
  }
};
