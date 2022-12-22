import { Router } from 'express';
import SkabelonRouter from './Skabeloner/SkabelonRouter';
import InstansRouter from './Instans/InstansRouter';

class MasterRouter {
    private _router = Router();
    private _subroutineA = SkabelonRouter;
    private _subroutineB = InstansRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routers to their matching routers.
     */
    private _configure() {
        this._router.use('/themeA', this._subroutineA);
        this._router.use('/themeB', this._subroutineB);
    }
}

export = new MasterRouter().router;