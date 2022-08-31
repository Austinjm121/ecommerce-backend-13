const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./product');
const Tag = require('./tag');

class ProductTag extends Model {}