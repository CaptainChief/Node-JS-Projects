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


  .get('/check_log', function(req, res, next)
  {
    var u_name = req.query.username;
    var pass = req.query.pass;

    
  })

  .get('/log', function(req, res, next)
  {
    res.render("log");
  })

  // get details of specific episode
  .get('/details', function(req, res, next)
  {
    var episode_id = req.query.id;
    pool.query("SELECT e_name, e_num, e_summ FROM episodes WHERE id = " + episode_id, function(err, result)
    {
      if(err)
      {
        console.log('There was an error in searching the database: \n', err);
      }
      else
      {
        var e_summ;
        var e_num;
        var e_name;
        var f_data = [];
        var data;

        e_summ = result.rows[0].e_summ;
        e_num = result.rows[0].e_num;
        e_name = result.rows[0].e_name;

        pool.query("SELECT f_data FROM facts WHERE e_id = " + episode_id, function(err, result)
        {
          if(err)
          {
            console.log('There was an error in searching the database: \n', err);
          }
          else
          {
            if(result.rows == 0)
            {
              data = false;
            }
            else
            {
              for(var i = 0; i < result.rowCount; i++)
              {
                f_data.push(result.rows[i].id);
              }
            }
          }
        })

        var episode_data = 
        { 
          e_summ: e_summ, 
          e_num: e_num,
          e_name: e_name,
          f_data: f_data,
          data: data
        };
        res.render("details", episode_data);
      }
    })
  })

  .get('/season', function(req, res, next)
  {
    var season_id = req.query.number;
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

        var season_data = { "episode_id": id 
                          , "episode_number": e_num 
                          , "episode_name": e_name
                          , "season_id": season_id
                          };
        res.json(season_data);
      }
    })
  })

  // set default route and content
  .get('/', function(req, res) 
  {
    res.sendFile('./episode.html', { root: __dirname + "/public" });
  })

  // run localhost
  .listen(app.get('port'), function() 
  {
  	console.log('Listening on port: ' + app.get('port'));
  });