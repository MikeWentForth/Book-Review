const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model { }

Review.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        review_text: {
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

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        review_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'review',
        underscored: true,
    }
);

module.exports = Review;