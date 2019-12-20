var express = require('express');

const Track = require('./models/track');
const Artist = require('./models/track');

var app = express();
const port = process.env.PORT;

app.get('/api/artists', function(req, res) {
  Artist.findAll().then((artists) => {
    res.json(artists);
  })
})

app.get('/api/tracks', function(req, res) {
  Track.findAll().then((tracks) => {
    res.json(tracks);
  })
})

app.patch('/api/tracks/:id', function(req, res) {
  Track.update(
      req.query, {
        where: {
          id: req.params.id
        }
      }
    )
    .then(result => {
      Track.findByPk(req.params.id).then((r) => {
        res.json(r);
      })
    })
    .catch(err => {
      res.json({
        "errors": [{
          "attribute": err.errors[0].path,
          "message": err.errors[0].message
        }]
      })
    })
})

app.listen(port, () => console.log(`Serving at http://localhost:${port}`))
