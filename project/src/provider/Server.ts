import Express,{Request,Response} from 'express';


class Server {
    //Atributos
    private app: Express.Application;
    private port: number;
    private env: string;
}