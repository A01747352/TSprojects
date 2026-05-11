import {Model} from 'sequelize';

interface LibroAtributos{
    idLibro:number,
    titulo:string,
    autor:string
}

module.exports = (sequelize:any, DataTypes:any)=>{
    class LibroModel extends Model<LibroAtributos>
    implements LibroAtributos{
        idLibro!: number;
        titulo!: string;
        autor!: string;
        static associate(models:any){}
    }
    LibroModel.init({
        idLibro:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        autor:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    },{
        sequelize,
        modelName:'Libro'
    });
    return LibroModel;
}
