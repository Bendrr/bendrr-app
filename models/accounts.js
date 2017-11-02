module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("accounts", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
        }
    },
    password: {
    	type: DataTypes.STRING,
     	allowNull: false,
      	validate: {
        len: [6]
        }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
	});

  Account.associate = function(models) {
    Account.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };
  return Account;
};
