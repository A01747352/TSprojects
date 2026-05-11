import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

export default class LibroController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance:LibroController;
    //Métodos de clase
    public static get instance():LibroController{
        return this._instance || 
        (this._instance = new this("Libro"));
    }
    //Metodo de instancia
    protected initRoutes(): void {
        this.router.get('/listarLibros',
            this.getListarLibros.bind(this));
        this.router.post('/crearLibro',
            this.postCrearLibro.bind(this));    
    }

    private async getListarLibros(
    req: Request,
    res: Response,
    ): Promise<void> {
    try {
      const proyectos = await db.Libro.findAll();

      console.log("Acceso a la ruta /listarLibros");
      res.status(200).json(proyectos);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
     private async postCrearLibro(
    req: Request,
    res: Response,
    ): Promise<void> {
    try {
      const proyectos = await db.Libro.findAll();
      await db["Libro"].create(req.body);

      console.log("Acceso a la ruta /crearLibro");
      res.status(200).json({ message: "Registro de libro exitoso" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
    }
}