// models/todo.js
'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Todo extends Model {}
Todo.init({
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'Todo'
});

module.exports = Todo;
