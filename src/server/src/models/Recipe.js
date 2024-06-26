
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
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredientLines: {
            type: DataTypes.TEXT, // Speichern Sie die Zutaten als JSON-String
            allowNull: false,
            get() {
                const rawValue = this.getDataValue('ingredientLines');
                return JSON.parse(rawValue);
            },
            set(value) {
                this.setDataValue('ingredientLines', JSON.stringify(value));
            }
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
