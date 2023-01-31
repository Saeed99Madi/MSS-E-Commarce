import { Sequelize } from 'sequelize';
import environment from '../config/environment';

const sequelize = new Sequelize(environment.dbUrl ?? '', {
  dialectOptions: { ssl: environment.ssl },
  define: {
    timestamps: true,
  },
  logging: false,
});

export default sequelize;
