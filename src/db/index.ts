import { User, Visitor } from '../models';
import sequelize from './connection';

User.hasMany(Visitor);
Visitor.belongsTo(User);

export { User, Visitor, sequelize };
