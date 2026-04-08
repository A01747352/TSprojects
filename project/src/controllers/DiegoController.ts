// Codigo que regresa mi nombre y apellido
import { Request, Response } from 'express';
import AbstractController from './AbstractController';

export default class DiegoController extends AbstractController {
    //Singleton
    //Atributos
    private static _instance: DiegoController;
    //Metodos de clase
    public static get instance(): DiegoController {
        return this._instance || (this._instance = new this("Diego"));
    }
    //Metodos de instancia
    protected initRoutes(): void {
        this.router.get('/nombre', this.getNombre.bind(this));
    }


    private async getNombre(req: Request, res: Response): Promise<void> {
        console.log("Acceso a la ruta /nombre");
        res.status(200).json({ mensaje: 'Diego Carreon' });
    }

}
