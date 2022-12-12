import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class ProductGalary extends Model {
  declare id: number;
  declare image: string;
  declare ProductId?: number;
}
ProductGalary.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  },
);
export default ProductGalary;
