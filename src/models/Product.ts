import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Product extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare cover: string;
  declare price: number;
  declare salePrice?: number;
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
    },
    description: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    salePrice: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    sequelize,
  },
);
export default Product;
