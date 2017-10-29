module.exports = function(sequelize, DataTypes) {
  var Picture = sequelize.define("pics", {
    picture_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
        }
    }
	});

  Picture.associate = function(models) {
    Picture.belongsTo(models.users, {
      onDelete: "cascade"
    });
  };
  return Picture;
};
