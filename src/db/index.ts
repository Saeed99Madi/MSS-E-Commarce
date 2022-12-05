import {
  Category,
  Product,
  ProductAttripute,
  ProductGalary,
  Slider,
  User,
  Contact,
  Settings,
  Service,
} from '../models';

import sequelize from './connection';

User.hasMany(Product);
Product.belongsTo(User);

Product.hasOne(Slider);
Slider.belongsTo(Product);

Product.hasMany(ProductGalary);
ProductGalary.belongsTo(Product);

Product.hasMany(ProductAttripute);
ProductAttripute.belongsTo(Product);

Category.hasMany(Category, { as: 'chields' });
Category.belongsTo(Category, {
  foreignKey: 'parentId',
  as: 'parent',
});

Category.hasMany(Product);
Product.belongsTo(Category);

export {
  User,
  Category,
  Product,
  ProductAttripute,
  ProductGalary,
  Contact,
  Slider,
  Settings,
  Service,
  sequelize,
};
