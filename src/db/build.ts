import environment from '../config/environment';

import {
  sequelize,
  Product,
  ProductAttripute,
  Category,
  User,
  Settings,
} from '.';

import data from './seeds.json';

const buildDB = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(data.User);
  await Category.bulkCreate(data.Category);
  await Product.bulkCreate(data.Product);
  await ProductAttripute.bulkCreate(data.ProductAttripute);
  await Settings.bulkCreate(data.Settings);
};

if (environment.nodeEnv !== 'test') {
  buildDB();
}

export default buildDB;
