import * as JWTAuth from "../helpers/jwt";
import User from "../models/User.model";

// export const authMiddleware = async (req, res, next) => {
//   const authHeader = req.header("Authorization")
//     ? req.header("Authorization").split(" ")
//     : null;

//   if (!authHeader) {
//     return res.status(401).json({ error: { message: "Unauthorised access" } });
//   }
//   const accessToken = authHeader[1];
//   try {
//     let { data } = await JWTAuth.verifyToken(accessToken);
//     let userData = data;
//     const { dataValues } = await User.findOne({
//       where: { email: userData.email },
//     });

//     let user = {
//       id: dataValues.id,
//       email: dataValues.email,
//       username: dataValues.username,
//     };
//     req.currentUser = user;
//     return next();
//   } catch (error) {
//     return res.status(401).json({ error: { message: "Unauthorised access" } });
//   }
// };
