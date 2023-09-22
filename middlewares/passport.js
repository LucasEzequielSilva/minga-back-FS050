import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import User from "../models/User.js";

export default passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    },
    async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload._id);
      try {
        if (user) {
          return done(null, user);
        } else {
          throw new Error("User doesn't exist");
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
