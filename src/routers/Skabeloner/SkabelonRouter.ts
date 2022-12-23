import { NextFunction, Request, Response, Router } from 'express';
import SkabelonController from '../../controllers/SkabelonController';
import {Skabeloner} from "../../entity/Skabeloner";

class SkabelonRouter {
    private _router = Router();
    private _controller = SkabelonController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routers to their matching controller endpoints.
     */
    private _configure() {
        this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
            try {

                res.json(SkabelonController.getAllSkabeloner())
                const result = this._controller.defaultMethod();
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });
    }
}

export = new SkabelonRouter().router;