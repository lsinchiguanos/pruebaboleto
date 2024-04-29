import express, { NextFunction, Response} from "express";
import bodyParser from "body-parser";
import { StatusCodes } from "http-status-codes";
import { Request } from "express";
import logger from "../shared/logger";
import db from "../../conexion";

var cors = require('cors');
var useragent = require('express-useragent');
require('dotenv').config();

export default class Server{
    public app: express.Application;
    public port: number = parseInt(process.env.PORT as string, 10);

    constructor(){
        this.app = express();
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(bodyParser.json())
        // para usar cors
        this.app.use(cors());
        /// Print API errors
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            logger.error(err.message, err);
            return res.status(StatusCodes.BAD_REQUEST).json({
                ok: false,
                error: err.message
            });
        });
        // Para user el userAgent para obtener datos del dispositivo y sistema operativo del lado cliente
        this.app.use(useragent.express());
        // Para testear reques and response
        this.app.use((req: any, res: Response, next: NextFunction) => {
            req.dispositivo = "Unknow";
            if(req.useragent.isAndroidNative){
                req.dispositivo = "AndroidN";
            }else if(req.useragent.isAndroid){
                req.dispositivo = "Android";
            }else if(req.useragent.browser){
                req.dispositivo = req.useragent.browser;
            }
            next();
        });
    }

    public async start( callback: Function ){
        //await db.sync({alter: true});
        await db.sync({force: false});
        this.app.listen(this.port, callback());
    }
}
