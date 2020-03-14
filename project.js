const express = require('express');
const DATABASE_URL = "postgres://gtnrtpvqtdlpmf:dccad0773782a76dde12b67125afee3f62c4920b4010061fcb6f1588c213aae2@ec2-18-235-20-228.compute-1.amazonaws.com:5432/d2tkmjcqt4i04l?ssl=true";
var episode = require('./episode.js');
const { Pool } = require('pg');
const pool = new Pool(
{
  connectionString: process.env.DATABASE_URL || DATABASE_URL,
  rejectUnauthorized: false
});
var app = express();

app.set('port', process.env.PORT || 5001)
  // set up directory for static files
  .use(express.static(__dirname + '/public'))

  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')

  // set default view engine
  .set('view engine', 'ejs')

  // get details of specific episode
  .get('/details', episode.get_details)

  .get('/season', function(req, res, next)
    {
      var id = req.query.season;
      pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = " + id, function(err, result)
      {
        if(err)
        {
          console.log('There was an error in searching the database: ', err);
        }
        else
        {
          res.json(result.rows);
        }
      })
    })
  // .get('/season_2', episode.season_2)
  // .get('/season_3', episode.season_3)
  // .get('/season_4', episode.season_4)
  // .get('/season_5', episode.season_5)
  // .get('/season_6', episode.season_6)
  // .get('/season_7', episode.season_7)
  // .get('/season_8', episode.season_8)

  // set default route and content
  .get('/', function(req, res) 
  {
    res.sendFile('./main.html', { root: __dirname + "/public" });
  })

  // run localhost
  .listen(app.get('port'), function() 
  {
  	console.log('Listening on port: ' + app.get('port'));
  });