import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Settings extends Model {
  declare id: number;
  declare email: string;
  declare phone: string;
  declare phone2?: string;
  declare address: string;
  declare facebook?: string;
  declare instagram?: string;
  declare linkedIn?: string;
  declare youtupe?: string;
  declare logo: string;
  declare logo2?: string;
  declare bio?: string;
}
Settings.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    phone2: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    facebook: {
      type: DataTypes.STRING,
    },
    instagram: {
      type: DataTypes.STRING,
    },
    linkedIn: {
      type: DataTypes.STRING,
    },
    youtupe: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    logo2: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  },
);
export default Settings;
