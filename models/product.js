const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Category = require('./category');

class Product extends Model {}