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
    }
	});

  Account.associate = function(models) {
    Account.hasOne(models.users, {
      onDelete: "cascade"
    });
  };
  return Account;
};
