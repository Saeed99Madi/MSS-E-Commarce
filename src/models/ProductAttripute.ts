import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class ProductAttripute extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
}
ProductAttripute.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
  },
);
export default ProductAttripute;
