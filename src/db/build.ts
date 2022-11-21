import environment from '../config/environment';

import { User, sequelize, Visitor } from '.';

import data from './seeds.json';

const buildDB = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(data.User);

  // await Visitor.bulkCreate(data.Booking);
};

if (environment.nodeEnv !== 'test') {
  buildDB();
}

export default buildDB;
