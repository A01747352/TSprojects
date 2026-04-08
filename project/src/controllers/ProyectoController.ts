import {Request, Response} from 'express';
import AbstractController from './AbstractController';

export default class ProyectoController extends AbstractController {
    //Singleton
    //Atributos
    private static _instance: ProyectoController;
    //Metodos de clase
    public static get instance(): ProyectoController {
        return this._instance || (this._instance = new this("Proyecto"));
    }
    //Metodos de instancia
    protected initRoutes(): void {
        this.router.get('/listarProyectos', this.getListarProyectos.bind(this));
        this.router.post('/crearProyecto', this.postCrearProyecto.bind(this));
    }

    private async getListarProyectos(req: Request, res: Response): Promise <void> {
        console.log("Acceso a la ruta /listarProyectos");
        res.status(200).json({mensaje: 'Ruta consumida'});
    }

    private async postCrearProyecto(req: Request, res: Response): Promise <void> {
        console.log("Acceso a la ruta /crearProyecto");
        res.status(200).json({mensaje: 'Ruta consumida'});
    }
}