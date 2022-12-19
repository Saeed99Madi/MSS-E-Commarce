import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Contact extends Model {
  declare id: number;
  declare name: string;
  declare phone: string;
  declare address: string;
  declare content: string;
}
Contact.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  },
);
export default Contact;
