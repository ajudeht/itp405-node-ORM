var express = require('express');

const Track = require('./models/track');
const Artist = require('./models/track');

var app = express();
const port = process.env.PORT || 3000;

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
          if (r){
            res.status(200);
            res.json(r);
          } else {
            res.status(404);
            res.send();
          }
        })
    })
    .catch(err => {
      res.status(422);
      res.json({
        "errors": [{
          "attribute": err.errors[0].path,
          "message": err.errors[0].message
        }]
      })
    })
})

let server = app.listen(port, () => console.log(`Serving at http://localhost:${port}`))

module.exports = {app, server};
