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
      // I want to add a ref to a foriegn key here.  How do we validate the date from the form agains the table contents?
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    interested_in: {
       // I want to add a ref to a foriegn key as above, same ?
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
    status: {
      // I want to add a ref to a foriegn key as above, same ?
      type: DataTypes.STRING,
      defaultValue: "Ready to Party",
      allowNull: false,
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
      // I want to add a ref to a foriegn key as above, same ?
      type: DataTypes.STRING,
      allowNull: true
    }

  });

  User.associate = function(models) {
    User.hasOne(models.accounts, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

    User.associate = function(models) {
    User.hasMany(models.pics, {
      onDelete: "cascade"
    });
  };

  return User;
};
