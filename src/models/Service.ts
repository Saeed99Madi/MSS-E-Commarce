import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Service extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare cover: string;
}
Service.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  },
);
export default Service;
