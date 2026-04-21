import {Model} from 'sequelize';
import { Col } from 'sequelize/lib/utils';

interface ColaboradorProyectoAtributos{
    idProyectoColaboradorProyecto:number,
    idColaboradorColaboradorProyecto:number,
    tarea:string
}

module.exports = (sequelize:any,DataTypes:any)=>{
    class ColaboradorProyectoModel extends Model<ColaboradorProyectoAtributos>
    implements ColaboradorProyectoAtributos{
        idProyectoColaboradorProyecto!: number;
        idColaboradorColaboradorProyecto!: number;
        tarea!:string;
        static associate(models:any){

        }
    }

    ColaboradorProyectoModel.init({
        idProyectoColaboradorProyecto:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Proyecto',
                key:'idProyecto'
            }
        },
        idColaboradorColaboradorProyecto:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Colaborador',
                key:'idColaborador'
            }
        },
        tarea:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        modelName:'ColaboradorProyecto'
    });
    return ColaboradorProyectoModel;
}