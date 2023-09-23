const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model { }

Book.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coverImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        publish_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    // Restructured the model so that modifiers/options appear in a separate {} section 
    // in keeping with sequelize manual and prior working projects.
    {
        sequelize,
        timestamps: true,
        modelName: 'book',
        underscored: true,
    }
);

module.exports = Book;
