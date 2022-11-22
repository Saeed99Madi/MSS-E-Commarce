import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Slider extends Model {
  declare id: number;
  declare order: number;
}
Slider.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    order: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  },
);
export default Slider;
