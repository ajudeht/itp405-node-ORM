var Sequelize = require('sequelize');
const sequelize = require('./../database/sequelize');

module.exports = sequelize.define('track', {
  id: {
    field: "TrackId",
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    field: "Name",
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  albumId: {
    field: "AlbumId",
    type: Sequelize.INTEGER
  },
  mediaTypeId: {
    field: "MediaTypeId",
    type: Sequelize.INTEGER
  },
  genreId: {
    field: "GenreId",
    type: Sequelize.INTEGER
  },
  composer: {
    field: "Composer",
    type: Sequelize.STRING
  },
  milliseconds: {
    field: "Milliseconds",
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: true,
    }
  },
  bytes: {
    field: "Bytes",
    type: Sequelize.INTEGER
  },
  unitPrice: {
    field: "UnitPrice",
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      isNumeric: true,
    }
  }
}, {
  timestamps: false
});
