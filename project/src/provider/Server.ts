import express, {Request,Response} from 'express';
import AbstractController from '../controllers/AbstractController';

class Server{
    //Atributos
    private app: express.Application;
    private port: number;
    private env: string;
    //Metodos constructor
    constructor(appInit:{port: number, env: string; middlewares: any[]; controllers: AbstractController[]}) {
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.initMiddlewares(appInit.middlewares);
        this.initControllers(appInit.controllers);
        this.connectDB(); 
    }
    //Metodos
    private initMiddlewares(middlewares: any[]){
        middlewares.forEach(middlewares => {
            this.app.use(middlewares);
        })
    };

    private initControllers(controllers: AbstractController[]){
        //Health Check
        this.app.get('/',(req: Request, res: Response) => {
            console.log('Health Check');
            res.send('Server is running');
        });
        controllers.forEach(controllers => {
            this.app.use("/"+ controllers.prefix, controllers.router);
        })
    };

    private connectDB(){

    }

    public init(): void{
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port} in ${this.env} mode`);
        });
    }
}

export default Server;