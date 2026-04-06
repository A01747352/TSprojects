import Express,{Request,Response} from 'express';


class Server {
    //Atributos
    private app: Express.Application;
    private port: number;
    private env: string;
    //Constructor
    constructor(appInit:{port:number;env:string;middlewares:any[];controllers:any[]}){
        this.app = Express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.initMiddlewares(appInit.middlewares);
        this.initControllers(appInit.controllers);
        this.connectDB();
    }
    //Metodos
    private initMiddlewares(middlewares:any[]):void{
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }
    private initControllers(controllers:any[]):void{
        //Health Check
        this.app.get('/health', (req:Request, res:Response) => {
            console.log('Health check');
            res.send('Server is OK');
        });
        controllers.forEach(controller => {
            this.app.use(controller.router);
        }); 
    }
    private connectDB(){
        
    }
    public init():void{
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port} in ${this.env} mode`);
        });
    }
}