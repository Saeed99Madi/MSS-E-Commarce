import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Category extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare cover: string;
}
Category.init(
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
    isChild: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  },
);
export default Category;
