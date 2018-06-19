module.exports = function (sequelize, DataTypes) {
  var Pets = sequelize.define("Pets", {

    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 3000]
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 3000]
      }
    },
    image_width: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
    {
      timestamp: true,
    });

  return Pets;
};

  // changelog: changed timestamp to true (bc i want to see) and added
  // image_width and image_height, also set all allowNulls to false so that
  // everything has to be filled out.