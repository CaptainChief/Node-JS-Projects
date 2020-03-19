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
      var season_id = req.query.season;
      pool.query("SELECT id, e_num, e_name FROM episodes WHERE s_id = " + season_id, function(err, result)
      {
        if(err)
        {
          console.log('There was an error in searching the database: \n', err);
        }
        else
        {

          var id = [];
          var e_num = [];
          var e_name = [];

          for(var i = 0; i < result.rowCount; i++)
          {
            id.push(result.rows[i].id);
            e_num.push(result.rows[i].e_num);
            e_name.push(result.rows[i].e_name);
          }

          var season_data = 
          { 
            episode_id: id, //array
            episode_number: e_num, //array
            episode_name: e_name, //array 
            season_id: season_id
          };
          res.render("./season", season_data);
        }
      })
    })

  // set default route and content
  .get('/', function(req, res) 
  {
    res.sendFile('./test', { root: __dirname + "/public" });
  })

  // run localhost
  .listen(app.get('port'), function() 
  {
  	console.log('Listening on port: ' + app.get('port'));
  });