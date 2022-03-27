import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import cron from 'node-cron';
import errorMiddleware from './middlewares/errorMiddleware.js';
import { deleteExpiredOTPs } from './modules/user/controllers/index.js';


export const runApp = () => {
    const app = express();

    // Middlewares
    app.use(helmet());
    app.use(compression());
    app.use(express.json({ limit: '100mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(fileUpload());
    app.use(cors({
        origin: "*",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        credentials: true,
        exposedHeaders: ['x-auth-token']
    }));

    // Schedule a task
    cron.schedule('59 23 * * *', () => {
        console.log('[cron] task running every day at 11:59 PM')
        deleteExpiredOTPs();
    });


    // Home Page Route
    app.route('/').get(function (req, res) {
        res.sendFile(process.cwd() + '/index.html')
    });

    return app;
}


export const closeApp = (app) => {
    // Middleware for Errors
    app.use(errorMiddleware);
}