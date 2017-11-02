module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    age: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    tag_line: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sms_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [10]
      }
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  User.associate = function(models) {
    User.hasOne(models.accounts, {
      onDelete: "cascade"
    });
  };

  User.associate = function(models) {
    User.hasMany(models.pics, {
      onDelete: "cascade"
    });
  };

  User.associate = function(models) {
    User.hasMany(models.bends, {
      onDelete: "cascade"
    });
  };

  return User;
};
