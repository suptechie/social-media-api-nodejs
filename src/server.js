import cloudinary from "cloudinary";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { runApp, closeApp } from "./app.js";
import initModules from "./initModules.js";

const app = runApp();

// Starting Server
(async () => {
  // Config
  if (process.env.NODE_ENV !== "production") {
    dotenv.config({
      path: "src/config/config.env",
    });
  }

  // Cloudinary Setup
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const port = process.env.PORT || 4000;

  // Connecting to DB
  const connectToDatabase = function () {
    return mongoose.connect(
      process.env.MONGO_URI,
      {
        dbName: process.env.DB_NAME,
        autoIndex: true,
        socketTimeoutMS: 45000,
        serverSelectionTimeoutMS: 60000,
      },
      function (err) {
        if (err) {
          console.log(`[database]: could not connect due to [${err.message}]`);
          app.listen(port, (err) => {
            if (err) {
              console.log(
                `[server] could not start http server on port: ${port}`
              );
              return;
            }
            console.log(`[server] running on port: ${port}`);
          });
          app.use("*", (req, res, next) => {
            res.status(500).json({
              success: false,
              message: "server is offline due to database error",
            });
          });

          //setTimeout(connectDatabase, 10000);
        } else {
          console.log(`[database]: connected successfully to MongoDB`);

          // Init Modules
          initModules(app);

          // Error Handler
          closeApp(app);

          const server = app.listen(port, (err) => {
            if (err) {
              console.log(
                `[server] could not start http server on port: ${port}`
              );
              return;
            }
            console.log(`[server] running on port: ${port}`);
          });

          // Handling Uncaught Exception
          process.on("uncaughtException", (err) => {
            console.log(`Error: ${err.message}`);
            console.log(`[server] shutting down due to Uncaught Exception`);

            server.close(() => {
              process.exit(1);
            });
          });

          // Unhandled Promise Rejection
          process.on("unhandledRejection", (err) => {
            console.log(`Error: ${err.message}`);
            console.log(
              `[server] shutting down due to Unhandled Promise Rejection`
            );

            server.close(() => {
              process.exit(1);
            });
          });
        }
      }
    );
  };

  connectToDatabase();
})();
