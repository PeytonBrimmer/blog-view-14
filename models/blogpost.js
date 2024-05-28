const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize: sequelize,
        freezeTableName: true,
        createdAt: true,
        underscored: true,
        modelName: 'blogpost',
        hooks: {
            beforeCreate: async (newBlogpostData) => {
                newBlogpostData.title = await newBlogpostData.title.toLowerCase();
                return newBlogpostData;
            },
        },
    }
);

module.exports = Blogpost;