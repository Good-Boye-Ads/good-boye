module.exports = function(sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
      pet_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 25]
        }
      },
      pet_name: {
        type:  DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 25]
        }
      },
      pet_age: {
        type: DataTypes.INT,
        allowNull: false,
      },
      location: {
        type:  DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 300]
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 300]
        }
      }
    });
  
    return Pets;
  };
  