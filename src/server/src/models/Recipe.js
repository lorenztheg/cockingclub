
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        uri: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Recipe.associate = function(models) {
        Recipe.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Recipe;
};
