import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Product extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare cover?: string;
  declare active?: boolean;
}
Product.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    cover: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
  },
);
export default Product;
