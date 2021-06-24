import mongoose from "mongoose";
import { level, logger } from "../logger/logger";

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    logger.log(level.info, "Connected to MongoDB...");
  } catch (error) {
    logger.log(level.error, err.message);
    // Exit process with failure
    process.exit(1);
  }
})();
