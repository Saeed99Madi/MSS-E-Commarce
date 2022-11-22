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

Slider.hasMany(Product);
Product.belongsTo(Slider);

Product.hasMany(ProductGalary);
ProductGalary.belongsTo(Product);

Product.hasMany(ProductAttripute);
ProductAttripute.belongsTo(Product);

Category.hasMany(Category);
Category.belongsTo(Category);

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
