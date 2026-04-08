import { Router } from 'express';

export default abstract class AbstractController {
    private _router: Router;
    private _prefix: string;

    protected constructor(prefix: string) {
        this._router = Router();
        this._prefix = prefix;
        this.initRoutes();
    }
    public get router(): Router {
        return this._router;
    }
    public get prefix(): string {
        return this._prefix;
    }
 
    protected abstract initRoutes(): void;

    public getRouter(): Router {
        return this._router;
    }

    public getPrefix(): string {
        return this._prefix;
    }
}