import mongoose from 'mongoose';
import { DB_NOSQL_HOST, DB_NOSQL_NAME, DB_NOSQL_PASSWORD, DB_NOSQL_USER } from '../config';

class MongoConnection{
    private readonly mongoUri:string;
    constructor(){
        //mongodb://username:password@host:port/database?authSource=admin
        this.mongoUri = 
        `mongodb://${DB_NOSQL_USER}:${DB_NOSQL_PASSWORD}@${DB_NOSQL_HOST}:27017/${DB_NOSQL_NAME}?authSource=admin`;
    }
    public async connect():Promise<void>{
        try {
            await mongoose.connect(this.mongoUri);
            console.log('Conexión a MongoDB establecida');
        } catch (error) {
            console.error('Error al conectar a MongoDB:', error);
            process.exit(1); // Salir del proceso con un código de error
        }
    }
}